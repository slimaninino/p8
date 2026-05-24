// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'NoahSwitch';
//   currentYear = new Date().getFullYear();

//   services = [
//     {
//       icon: '🎯',
//       title: 'Brand Strategy',
//       description: 'Developing cohesive branding strategies that resonate with your target audience'
//     },
//     {
//       icon: '🎨',
//       title: 'Brand ID Systems',
//       description: 'Crafting compelling brand identities that set you apart from the competition'
//     },
//     {
//       icon: '📝',
//       title: 'Brand Content',
//       description: 'Creating captivating content that engages and inspires your audience'
//     },
//     {
//       icon: '💡',
//       title: 'Creative Concepts',
//       description: 'Conceptualizing innovative digital solutions for modern challenges'
//     },
//     {
//       icon: '💻',
//       title: 'Digital Expertise',
//       description: 'Website development, marketing, and international marketing excellence'
//     },
//     {
//       icon: '🚀',
//       title: 'Technology Training',
//       description: 'Cutting-edge training programs to empower individuals and organizations'
//     }
//   ];

//   scrollToContact() {
//     document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
//   }

// }
import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import Splide from '@splidejs/splide';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
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

  demos = [
    { name: 'Demo 1', src: 'assets/Index/index-1.html' },
    { name: 'Demo 2', src: 'assets/Index/index-2.html' },
    { name: 'Demo 3', src: 'assets/Index/index-3.html' }
  ];

  ngAfterViewInit(): void {
    new Splide('#demos-slider', {
      perPage: 1,
      perMove: 1,
      gap: '1rem',
      arrows: true,
      pagination: true,
      drag: true,
      rewind: true
    }).mount();
  }
}