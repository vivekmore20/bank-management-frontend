import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      if (username === 'viv' && password === 'sonu') {
        sessionStorage.setItem('isLoggedIn', 'true');
        this.toastr.success('Login Successful');
        this.router.navigate(['customer']);
      } else {
        this.toastr.error('Invalid Credentials');
      }
    }
  }

  onLogOut(): void {}
}
