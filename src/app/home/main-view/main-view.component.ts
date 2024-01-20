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
  contactForm:FormGroup | any;
  currentTime: Date = new Date();
  pageChange:number = 1;
  headerCount:number = 1;
  skillCounter: number = 0;
  headerToggle:boolean = false;
  darkModeValue:any;
  darkMode = signal<any>(this.darkValue);
  @HostBinding('class.dark') get mode(){
    return this.darkMode();
  }

  constructor(private _fb:FormBuilder, @Inject(PLATFORM_ID) private platformId: object) {

    effect(()=> {
      if (isPlatformBrowser(this.platformId)){  // Using isPlatform for local storage error in ssr
        localStorage.setItem('darkMode', JSON.stringify(this.darkMode()));
        setTimeout(() => {
          this.darkModeValue = localStorage.getItem('dark');  // For toggle button, the boolean is string acctually
        }, 500);
      }
      
    });
   }

   get darkValue(){  // Returning the boolean value for signal variable
    if (isPlatformBrowser(this.platformId)){
      return JSON.parse(localStorage.getItem('darkMode') ?? 'false' );
    }
    
   }

  next(){
    if(!this.headerToggle){
    if(this.pageChange<4){
      this.pageChange++;
    }
  }
  }
  prev(){
    if(!this.headerToggle){
    if(this.pageChange>1){
      this.pageChange--;
    }
  }
  }
  toggle(){
    this.headerCount++;
    this.headerCount % 2 == 0 ? this.headerToggle = true : this.headerToggle = false;
  }
  scrollToggle(){
    this.pageChange == 1 ? this.pageChange = 4 : this.pageChange ==4 ?this.pageChange = 1:this.pageChange=1; 
  }
  skill(val:any){
    this.skillCounter = val;
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
  onSubmit(form:any){
    console.warn(form)
    this.contactForm.reset()
  }
  ngOnInit(): void {
    this.contactForm = this._fb.group({
      name:['', Validators.required],
      email:['', [Validators.required, Validators.pattern('^[A-Za-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      contact:[''],
      message:['', Validators.required]
    })
  }

  get isNameRequired(){
    const nameControl = this.contactForm.get('name');
    return nameControl.invalid && nameControl.touched;
  }
  get isEmailRequired(){
    const emailControl = this.contactForm.get('email');
    return emailControl.errors?.required && emailControl.touched;
  }
  get isEmailValid(){
    const emailControl = this.contactForm.get('email');
    return emailControl.errors?.pattern && emailControl.touched;
  }
  get isMessageRequired(){
    const messageControl = this.contactForm.get('message');
    return messageControl.invalid && messageControl.touched;
  }

  projectData:any[] = [
    {
      title:"Falconpack UAE",
      desc:"",
      url:"https://falconpack.com/",
      color:"bg-orange-400"
    },
    {
      title:"Fougito",
      desc:"",
      url:"",
      color:"bg-blue-400"
    },
    {
      title:"Falconpack | B2B Site",
      desc:"",
      url:"https://fpweb.demowbs.com/",
      color:"bg-green-400"
    },
    {
      title:"CRUD Form (Personal Project)",
      desc:"",
      url:"https://pr-crud.netlify.app/",
      color:"bg-red-400"
    }
  ]
  
}
