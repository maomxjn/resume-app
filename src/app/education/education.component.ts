import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  educations : any[]= [ 
    {phase:"March 2006 present",degree:"Master Degree",title:"Front End Developer",school:"University of Toronto",detail:"adfsffdfsfsdfdsfsdfsfsdfsdfffffffffffffffffffffffffff"},
    {phase:"April 2004  March 2006",degree:"Bechelor Degree",title:"Web Developer",school:"University of Toronto",detail:"adfsffdfsfsdfdsfsdfsfsdfsdfffffffffffffffffffffffffff"},
    {phase:"March 2003 April 2004",degree:"High School",title:"Intern",school:"Brookmill high school",detail:"adfsffdfsfsdfdsfsdfsfsdfsdfffffffffffffffffffffffffff"},
]
}