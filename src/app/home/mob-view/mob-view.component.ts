import { CommonModule, DatePipe, isPlatformBrowser } from '@angular/common';
import { Component, HostBinding, OnInit, effect, signal, Inject, PLATFORM_ID, HostListener, AfterViewInit } from '@angular/core';
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
export class MobViewComponent implements OnInit, AfterViewInit {

  constructor(){}

  ngAfterViewInit(): void {
    
  }
  ngOnInit(): void {
    
  }
}
