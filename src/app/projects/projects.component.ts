import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
      desc:"",
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
