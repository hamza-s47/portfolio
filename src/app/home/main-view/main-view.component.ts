import { Component, HostBinding, OnInit, effect, signal, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, DatePipe, isPlatformBrowser } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    DatePipe,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.scss'
})
export class MainViewComponent implements OnInit {

  // keyEvent:any;
  contactForm: FormGroup | any;
  currentTime: Date = new Date();
  pageChange: number = 1;
  headerCount: number = 1;
  skillCounter: number = 0;
  headerToggle: boolean = false;
  darkModeValue: any;
  darkMode = signal<any>(this.darkValue);
  @HostBinding('class.dark') get mode() {
    return this.darkMode();
  }

  constructor(private _fb: FormBuilder, @Inject(PLATFORM_ID) private platformId: object) {

    effect(() => {
      if (isPlatformBrowser(this.platformId)) {  // Using isPlatform for local storage error in ssr
        localStorage.setItem('darkMode', JSON.stringify(this.darkMode()));
        setTimeout(() => {
          this.darkModeValue = localStorage.getItem('dark');  // For toggle button, the boolean is string acctually
        }, 50);
      }

    });
  }

  get darkValue() {  // Returning the boolean value for signal variable
    if (isPlatformBrowser(this.platformId)) {
      return JSON.parse(localStorage.getItem('darkMode') ?? 'false');
    }
  }

  next() {
    if (!this.headerToggle) {
      if (this.pageChange < 4) {
        this.pageChange++;
      }
    }
  }
  prev() {
    if (!this.headerToggle) {
      if (this.pageChange > 1) {
        this.pageChange--;
      }
    }
  }
  toggle() {
    this.headerCount++;
    this.headerCount % 2 == 0 ? this.headerToggle = true : this.headerToggle = false;
  }
  scrollToggle() {
    this.pageChange == 1 ? this.pageChange = 4 : this.pageChange == 4 ? this.pageChange = 1 : this.pageChange = 1;
  }
  skill(val: any) {
    this.skillCounter = val;
  }
  checkboxValue(val: any) {
    // console.warn(val.target.checked);
    if (isPlatformBrowser(this.platformId)) {
      // const value = val.target.checked;
      if (this.darkMode()) {
        JSON.stringify(localStorage.setItem('dark', 'false'));
      }
      else {
        JSON.stringify(localStorage.setItem('dark', 'true'));
      }

    }

    this.darkMode.set(!this.darkMode())
  }
  onSubmit(form: any) {
    console.warn(form)
    this.contactForm.reset()
  }
  ngOnInit(): void {
    this.contactForm = this._fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('^[A-Za-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      contact: [''],
      message: ['', Validators.required]
    });
  }

  get isNameRequired() {
    const nameControl = this.contactForm.get('name');
    return nameControl.invalid && nameControl.touched;
  }
  get isEmailRequired() {
    const emailControl = this.contactForm.get('email');
    return emailControl.errors?.required && emailControl.touched;
  }
  get isEmailValid() {
    const emailControl = this.contactForm.get('email');
    return emailControl.errors?.pattern && emailControl.touched;
  }
  get isMessageRequired() {
    const messageControl = this.contactForm.get('message');
    return messageControl.invalid && messageControl.touched;
  }

  projectData: any[] = [
    {
      title: "Falconpack US",
      desc: "This website/web-app was created utilizing Angular CLI as the foundation, our project seamlessly integrated Tailwind CSS and various Angular libraries to craft a modern web application. This dynamic and responsive interface, enriched with interactive components, efficiently interacted with backend APIs and databases. The project's outcome is a visually appealing, scalable, and user-friendly application, delivering a top-notch web experience.",
      url: "https://falconpack.us/",
      color: "bg-[#9C2C77]",
      colorL:"bg-[#9376E0]"
    },
    {
      title: "Fougito",
      desc: "Explore this dynamic website, powered by Angular CLI for seamless functionality and Tailwind CSS for a modern, stylish look. With intuitive navigation and responsive design, it adapts smoothly to your device. Experience a user-friendly interface that combines the best of technology and aesthetics for an engaging online journey.",
      url: "",
      color: "bg-[#CD104D]",
      colorL:"bg-[#E893CF]"
    },
    {
      title: "Falconpack | B2B Site",
      desc: "A dynamic e-commerce website crafted using Angular and Tailwind CSS. This project embodies innovation and user-friendly design, through a seamless fusion of front-end technologies, I've created an engaging online shopping experience, complete with dynamic functionalities and visually captivating layouts.",
      url: "https://fpweb.demowbs.com/",
      color: "bg-[#E14D2A]",
      colorL:"bg-[#F3BCC8]"
    },
    {
      title: "CRUD Form (Personal Project)",
      desc: "I've used Angular CLI and Tailwind CSS to create a feature-packed solution that simplifies data management. With CRUD operations, powerful search, and sorting capabilities, it's a breeze to handle the data. What's more, you can export (download) your existing data in PDF format with just a click!",
      url: "https://pr-crud.netlify.app/",
      color: "bg-[#FD841F]",
      colorL:"bg-[#F6FFA6]"
    }
  ]

}
