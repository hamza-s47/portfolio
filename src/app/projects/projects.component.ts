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

  darkMode = signal<any>(this.darkValue);
  @HostBinding('class.dark') get mode(){
    return this.darkMode();
  }

  constructor(@Inject(PLATFORM_ID) private platformId: object){

    effect(()=> {
      if (isPlatformBrowser(this.platformId)){  // Using isPlatform for local storage error in ssr
        localStorage.setItem('darkMode', JSON.stringify(this.darkMode()));
        JSON.stringify(localStorage.setItem('dark', this.darkMode()));
      }
      
    });
  }

  get darkValue(){  // Returning the boolean value for signal variable
    if (isPlatformBrowser(this.platformId)){
      return JSON.parse(localStorage.getItem('darkMode') ?? 'false' );
    }
  }


  projectData:any[] = [
    {
      title:"Falconpack UAE",
      image:"../../../assets/images/projects/falcon.png",
      desc:"",
      url:"https://falconpack.com/",
    },
    {
      title:"Falconpack US",
      image:"../../../assets/images/projects/falcon.png",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aperiam temporibus nisi odit quibusdam excepturi ipsam similique quas sit quod tenetur, eveniet, delectus, aliquid culpa! Sapiente consequuntur deleniti optio eius?",
      url:"https://falconpack.us/",
    },
    {
      title:"Falconpack | B2B Site",
      image:"../../../assets/images/projects/falcon.png",
      desc:"",
      url:"https://fpweb.demowbs.com/",
    },
    {
      title:"Fougito",
      image:"../../../assets/images/projects/fougito.png",
      desc:"",
      url:"https://falconpack.us/",
    }
  ]
}
