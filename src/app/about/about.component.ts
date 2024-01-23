import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  about1 : string ="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis ipsum error eligendi molestiae eaque quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis ipsum error eligendi molestiae eaque quas."
  about2 : string ="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis ipsum error eligendi molestiae eaque quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis ipsum error eligendi molestiae eaque quas."

  age: string ="24"
  email: string = "anthony@compileFactoryFunction.com"
  phone: string ="+1718-111-0011"
  address: string ="140,City Center,New York,U.S.A"
  language: string="Englishi,German,French"
}
