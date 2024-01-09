import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [
    CommonModule,
    DatePipe
  ],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.scss'
})
export class MainViewComponent implements OnInit {

  currentTime: Date = new Date();
  pageChange:number = 1;
  headerCount:number = 1;
  skillCounter: number = 0;
  headerToggle:boolean = false;

  constructor() { }

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
  ngOnInit(): void {
    
  }

  
}
