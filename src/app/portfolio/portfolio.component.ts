import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
 public urls : string []=[ 
  "../../assets/images/computer1.jpg",
  "../../assets/images/computer2.jpg",
  "../../assets/images/computer3.jpg",
  "../../assets/images/computer4.jpg"]

}
