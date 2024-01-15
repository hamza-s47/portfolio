import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
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

  constructor(private _fb:FormBuilder) { }

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
  // onKeyPress(event:KeyboardEvent){
  //   if(this.keyEvent == 'm'){
  //     this.keyEvent = null;
  //   }
  //   else{
  //     this.keyEvent = event.key;
  //   }
    
  //   // console.warn(this.keyEvent)
  // }
  onSubmit(form:any){
    console.warn(form)
  }
  ngOnInit(): void {
    this.contactForm = this._fb.group({
      name:['', Validators.required],
      email:['', [Validators.required, Validators.pattern('')]],
      contact:[''],
      message:['', Validators.required]
    })
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
