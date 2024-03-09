import { AfterViewInit, Component } from '@angular/core';
import { MainViewComponent } from './main-view/main-view.component';
import { MobViewComponent } from './mob-view/mob-view.component';
import { LoaderComponent } from '../loader/loader.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MainViewComponent,
    MobViewComponent,
    LoaderComponent,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
  loader:boolean = true;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loader = false;
    }, 2500);
  }

}
