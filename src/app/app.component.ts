import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NoahSwitch';
  currentYear = new Date().getFullYear();

  services = [
    {
      icon: '🎯',
      title: 'Brand Strategy',
      description: 'Developing cohesive branding strategies that resonate with your target audience'
    },
    {
      icon: '🎨',
      title: 'Brand ID Systems',
      description: 'Crafting compelling brand identities that set you apart from the competition'
    },
    {
      icon: '📝',
      title: 'Brand Content',
      description: 'Creating captivating content that engages and inspires your audience'
    },
    {
      icon: '💡',
      title: 'Creative Concepts',
      description: 'Conceptualizing innovative digital solutions for modern challenges'
    },
    {
      icon: '💻',
      title: 'Digital Expertise',
      description: 'Website development, marketing, and international marketing excellence'
    },
    {
      icon: '🚀',
      title: 'Technology Training',
      description: 'Cutting-edge training programs to empower individuals and organizations'
    }
  ];

  scrollToContact() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }
  // Add this to handle form submission
  onFormSubmit(form: any) {
    if (form.valid) {
      // Let the browser's native form submission handle it
      form.nativeElement.submit();
    }
  }
}
