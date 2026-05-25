import { VercelRequest, VercelResponse } from '@vercel/node';
import https from 'https';

// Simple in-memory rate limiter for submissions
// In production, use a persistent store like Redis or Vercel KV
interface RateLimitStore {
  [ip: string]: number; // timestamp of last submission
}

const rateLimitStore: RateLimitStore = {};
const RATE_LIMIT_WINDOW = 3 * 60 * 1000; // 3 minutes in milliseconds

function getClientIp(req: VercelRequest): string {
  const forwarded = req.headers['x-forwarded-for'];
  if (typeof forwarded === 'string') {
    return forwarded.split(',')[0].trim();
  }
  return req.connection.remoteAddress || 'unknown';
}

function isRateLimited(ip: string): boolean {
  const lastSubmission = rateLimitStore[ip];
  if (!lastSubmission) {
    return false;
  }
  const now = Date.now();
  return now - lastSubmission < RATE_LIMIT_WINDOW;
}

function updateRateLimit(ip: string): void {
  rateLimitStore[ip] = Date.now();
}

function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '')
    .substring(0, 1000);
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
}

function forwardToGoogleForms(formData: Record<string, string>): Promise<void> {
  return new Promise((resolve, reject) => {
    const googleFormAction =
      'https://docs.google.com/forms/d/e/1FAIpQLSchCRl788Zfx7l0VUGpm6-Yvmo0m0yUeQ1bZvUBfdWvkcRC-A/formResponse';

    const params = new URLSearchParams();
    params.append('entry.2005620554', formData.name); // name
    params.append('entry.1045781291', formData.email); // email
    params.append('entry.1065046570', formData.address); // address
    params.append('entry.1166974658', formData.phone || ''); // phone
    params.append('entry.839337160', formData.comments || ''); // comments

    const postData = params.toString();

    const options = {
      hostname: 'docs.google.com',
      port: 443,
      path: '/forms/d/e/1FAIpQLSchCRl788Zfx7l0VUGpm6-Yvmo0m0yUeQ1bZvUBfdWvkcRC-A/formResponse',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    const req = https.request(options, (res) => {
      // Google Forms returns 200 for both success and submission
      if (res.statusCode === 200 || res.statusCode === 301 || res.statusCode === 302) {
        resolve();
      } else {
        reject(new Error(`Google Forms returned status ${res.statusCode}`));
      }
    });

    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const { name, email, address, phone, comments } = req.body;

    // Validate required fields
    if (!name || !email || !address) {
      return res.status(400).json({
        error: 'Missing required fields: name, email, address'
      });
    }

    // Validate email format
    if (!validateEmail(email)) {
      return res.status(400).json({
        error: 'Invalid email address'
      });
    }

    // Get client IP for rate limiting
    const clientIp = getClientIp(req);

    // Check rate limit
    if (isRateLimited(clientIp)) {
      return res.status(429).json({
        error: 'Too many requests. Please try again in 3 minutes.'
      });
    }

    // Sanitize inputs
    const sanitized = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      address: sanitizeInput(address),
      phone: sanitizeInput(phone || ''),
      comments: sanitizeInput(comments || '')
    };

    // Forward to Google Forms
    try {
      await forwardToGoogleForms(sanitized);
    } catch (error) {
      console.error('Error forwarding to Google Forms:', error);
      return res.status(502).json({
        error: 'Failed to submit form'
      });
    }

    // Update rate limit for this IP
    updateRateLimit(clientIp);

    return res.status(200).json({
      success: true,
      message: 'Message sent successfully'
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({
      error: 'Internal server error'
    });
  }
}
