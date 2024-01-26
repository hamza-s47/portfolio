import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostBinding, OnInit, effect, signal, Inject, PLATFORM_ID } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  lineClamp: boolean = true;
  darkMode = signal<any>(this.darkValue);
  @HostBinding('class.dark') get mode() {
    return this.darkMode();
  }

  constructor(@Inject(PLATFORM_ID) private platformId: object) {

    effect(() => {
      if (isPlatformBrowser(this.platformId)) {  // Using isPlatform for local storage error in ssr
        localStorage.setItem('darkMode', JSON.stringify(this.darkMode()));
        JSON.stringify(localStorage.setItem('dark', this.darkMode()));
      }

    });
  }

  get darkValue() {  // Returning the boolean value for signal variable
    if (isPlatformBrowser(this.platformId)) {
      return JSON.parse(localStorage.getItem('darkMode') ?? 'false');
    }
  }

  toggleLineclamp(item: boolean) {
    this.projectData.forEach(e=>{
      e.lineClamp = !e.lineClamp;
    })
  }


  projectData: any[] = [
    {
      title: "Falconpack US",
      desc: "This website/web-app was created utilizing Angular CLI as the foundation, our project seamlessly integrated Tailwind CSS and various Angular libraries to craft a modern web application. This dynamic and responsive interface, enriched with interactive components, efficiently interacted with backend APIs and databases. The project's outcome is a visually appealing, scalable, and user-friendly application, delivering a top-notch web experience.",
      url: "https://falconpack.us/",
      lineClamp: true
    },
    {
      title: "Falconpack | B2B Site",
      desc: "A dynamic e-commerce website crafted using Angular and Tailwind CSS. This project embodies innovation and user-friendly design, through a seamless fusion of front-end technologies, I've created an engaging online shopping experience, complete with dynamic functionalities and visually captivating layouts.",
      url: "https://fpweb.demowbs.com/",
      lineClamp: true
    },
    {
      title: "Falconpack UAE",
      desc: "This website/web-app was created utilizing Angular CLI as the foundation, our project seamlessly integrated Tailwind CSS and various Angular libraries to craft a modern web application. This dynamic and responsive interface, enriched with interactive components, efficiently interacted with backend APIs and databases. The project's outcome is a visually appealing, scalable, and user-friendly application, delivering a top-notch web experience.",
      url: "https://falconpack.com/",
      lineClamp: true
    },
    {
      title: "Fougito",
      desc: "Explore this dynamic website, powered by Angular CLI for seamless functionality and Tailwind CSS for a modern, stylish look. With intuitive navigation and responsive design, it adapts smoothly to your device. Experience a user-friendly interface that combines the best of technology and aesthetics for an engaging online journey.",
      url: "https://www.staging.fougito.com/",
      lineClamp: true
    },
    {
      title: "CRUD Form (Personal)",
      desc: "I've used Angular CLI and Tailwind CSS to create a feature-packed solution that simplifies data management. With CRUD operations, powerful search, and sorting capabilities, it's a breeze to handle the data. What's more, you can export (download) your existing data in PDF format with just a click!",
      url: "https://pr-crud.netlify.app/",
      lineClamp: true
    },
    {
      title: "Animated Landing Page (Personal)",
      desc: "A dynamic animated landing page crafted using Angular and Tailwind CSS. Explore how I brought creativity to life with seamless animations and responsive design.",
      url: "https://pr-hero.netlify.app/",
      lineClamp: true
    }
  ]
}
