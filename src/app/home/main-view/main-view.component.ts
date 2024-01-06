import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.scss'
})
export class MainViewComponent implements OnInit {

  currentTime: Date = new Date();
  pageChange:number = 1;
  headerCount:number = 1;
  headerToggle:boolean = false;

  constructor() { }

  next(){
    if(this.pageChange<4){
      this.pageChange++;
    }
  }
  prev(){
    if(this.pageChange>1){
      this.pageChange--;
    }
  }
  toggle(){
    this.headerCount++;
    this.headerCount % 2 == 0 ? this.headerToggle = true : this.headerToggle = false; 
   alert()
  }
  ngOnInit(): void {
  }
}
