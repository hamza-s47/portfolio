import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule, DatePipe, isPlatformBrowser } from '@angular/common';
import { Component, HostBinding, OnInit, effect, signal, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-mob-view',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    DatePipe,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule
  ],
  templateUrl: './mob-view.component.html',
  styleUrl: './mob-view.component.scss',
  animations: [
    trigger('slide', [
      state('void', style({
        left: -500,
      })),
      transition('void <=> *', animate(100)),
    ])
  ]
})
export class MobViewComponent implements OnInit, AfterViewInit {
  contentSrc:string = 'hero';
  menu:boolean = false;
  darkModeValue: any;
  darkMode = signal<any>(this.darkValue);
  @HostBinding('class.dark') get mode() {
    return this.darkMode();
  }

  constructor(@Inject(PLATFORM_ID) private platformId: object){
    effect(() => {
      if (isPlatformBrowser(this.platformId)) {  // Using isPlatform for local storage error in ssr
        localStorage.setItem('darkMode', JSON.stringify(this.darkMode()));
        setTimeout(() => {
          this.darkModeValue = localStorage.getItem('dark');  // For toggle button, the boolean is string acctually
        }, 10);
      }

    });
  }
  get darkValue() {  // Returning the boolean value for signal variable
    if (isPlatformBrowser(this.platformId)) {
      return JSON.parse(localStorage.getItem('darkMode') ?? 'false');
    }
  }
  
  checkboxValue(val: any) {
    // console.warn(val.target.checked);
    if (isPlatformBrowser(this.platformId)) {
      if (this.darkMode()) {
        JSON.stringify(localStorage.setItem('dark', 'false'));
      }
      else {
        JSON.stringify(localStorage.setItem('dark', 'true'));
      }

    }

    this.darkMode.set(!this.darkMode())
  }

  ngAfterViewInit(): void {
    
  }
  ngOnInit(): void {
    
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    margin:20,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        stagePadding:50,
        items: 1
      },
      400: {
        stagePadding:60,
        items: 1
      },
      600: {
        stagePadding:60,
        items: 2
      },
      // 740: {
      //   stagePadding:80,
      //   items: 2
      // },
      // 940: {
      //   stagePadding:100,
      //   items: 2
      // },
    },
    nav: false
  }

  switchContent(val:any){
    this.menu ? this.menu = false : '';
    this.contentSrc = val.link;
    
  }

  content = [
    {
      name:"Home",
      link:"hero",
      color: "bg-myBlack",
      colorL:"dark:bg-primary"
    },
    {
      name:"About",
      link:"about",
      color: "bg-myBlack/90",
      colorL:"dark:bg-[#D7A07D]"
    },
    {
      name:"Skills",
      link:"skill",
      color: "bg-myBlack/80",
      colorL:"dark:bg-[#ECB390]"
    },
    {
      name:"Projects",
      link:"project",
      color: "bg-myBlack/70",
      colorL:"dark:bg-[#ECDFC8]"
    },
    {
      name:"Contact Me",
      link:"contact",
      color: "bg-myBlack/60",
      colorL:"dark:bg-[#ECEFE9]"
    }
  ]

  skills:any[] = [
    {
      name:"Angular",
      tag:"<svg  xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><path d='M185.7 268.1h76.2l-38.1-91.6-38.1 91.6zM223.8 32L16 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7zM354 373.8h-48.6l-26.2-65.4H168.6l-26.2 65.4H93.7L223.8 81.5z' fill='red' /></svg>"
    },
    {
      name:"Javascript",
      tag:""
    },
    {
      name:"Tailwind CSS",
      tag:""
    },
    {
      name:"SCSS",
      tag:""
    },
    {
      name:"MongoDB",
      tag:""
    },
    {
      name:"C++",
      tag:""
    }
  ]
}
