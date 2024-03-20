import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-transaction',
  templateUrl: './home-transaction.component.html',
  styleUrl: './home-transaction.component.scss'
})
export class HomeTransactionComponent {

  constructor(private router:Router){
    this.router.navigate(['transaction/add-transaction'])
  }
}
