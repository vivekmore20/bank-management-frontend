import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-account',
  templateUrl: './home-account.component.html',
  styleUrl: './home-account.component.scss'
})
export class HomeAccountComponent {

  constructor(private router:Router){
    this.router.navigate(['account/add-account'])
  }
}
