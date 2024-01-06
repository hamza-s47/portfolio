import { Component } from '@angular/core';
import { MainViewComponent } from './main-view/main-view.component';
import { MobViewComponent } from './mob-view/mob-view.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MainViewComponent,
    MobViewComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
