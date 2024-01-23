import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experiences : any[]= [ 
    {phase:"March 2006 present",company:"CREATIVEM",title:"Front End Developer",detail:"adfsffdfsfsdfdsfsdfsfsdfsdfffffffffffffffffffffffffff"},
    {phase:"April 2004  March 2006",company:"WEBNOTE",title:"Web Developer",detail:"adfsffdfsfsdfdsfsdfsfsdfsdfffffffffffffffffffffffffff"},
    {phase:"March 2003 April 2004",company:"WEBM",title:"Intern",detail:"adfsffdfsfsdfdsfsdfsfsdfsdfffffffffffffffffffffffffff"},
]
}