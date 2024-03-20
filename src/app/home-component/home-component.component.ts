import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.scss'
})
export class HomeComponentComponent {

  constructor(private router:Router,private toastr:ToastrService){}
  login(){
    this.router.navigate(['login'])
  }
  logout(){
    console.log("logout")
    sessionStorage.setItem('isLoggedIn', 'false');
    this.toastr.info('Logged out successfully');
  }
}
