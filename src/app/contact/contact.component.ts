import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  email: string = "anthony@compileFactoryFunction.com"
  phone: string ="+1718-111-0011"
  address: string ="140,City Center,New York,U.S.A"
}
