import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-customer',
  templateUrl: './home-customer.component.html',
  styleUrl: './home-customer.component.scss'
})
export class HomeCustomerComponent {

  constructor(private router:Router){
    this.router.navigate(['customer/add-customer'])
  }
}
