import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule, DatePipe, isPlatformBrowser } from '@angular/common';
import { Component, HostBinding, effect, signal, Inject, PLATFORM_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
export class MobViewComponent{
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
}
