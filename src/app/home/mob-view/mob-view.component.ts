import { CommonModule, DatePipe, isPlatformBrowser } from '@angular/common';
import { Component, HostBinding, OnInit, effect, signal, Inject, PLATFORM_ID } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mob-view',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    DatePipe,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './mob-view.component.html',
  styleUrl: './mob-view.component.scss'
})
export class MobViewComponent {

  contactForm:FormGroup | any;
  currentTime: Date = new Date();
  darkModeValue:any;
  darkMode = signal<any>(this.darkValue);
  @HostBinding('class.dark') get mode(){
    return this.darkMode();
  }

  constructor(private _fb:FormBuilder, @Inject(PLATFORM_ID) private platformId: object){

    effect(()=> {
      if (isPlatformBrowser(this.platformId)){  // Using isPlatform for local storage error in ssr
        localStorage.setItem('darkMode', JSON.stringify(this.darkMode()));
        setTimeout(() => {
          this.darkModeValue = localStorage.getItem('dark');  // For toggle button, the boolean is string acctually
        }, 500);
      }
      
    });
  }

  get darkValue() {  // Returning the boolean value for signal variable
    if (isPlatformBrowser(this.platformId)) {
      return JSON.parse(localStorage.getItem('darkMode') ?? 'false');
    }
  }

  checkboxValue(val:any){
    // console.warn(val.target.checked);
    if (isPlatformBrowser(this.platformId)){
      // const value = val.target.checked;
      if(this.darkMode()){
        JSON.stringify(localStorage.setItem('dark', 'false'));
      }
      else {
        JSON.stringify(localStorage.setItem('dark', 'true'));
      }
      
    }
  
    this.darkMode.set(!this.darkMode())
  }

  toggle(){

  }

}
