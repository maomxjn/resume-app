import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills: any[] =[
    {name:"HTML",degree:80 },
    {name:"CSS",degree:75},
    {name:"JAVASCRIPT",degree:60},
    {name:"SASS",degree:60},
    {name:"BOOTSTRAP",degree:75},
    {name:"PHOTOSHOP",degree:70},
  ]

}
