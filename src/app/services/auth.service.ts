import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login(username: string, password: string) {
    if (username === "viv" && password === 'sonu') {
      sessionStorage.setItem("isLoggedIn", "true");
      return true;
    } else {
      sessionStorage.setItem("isLoggedIn", "false");
      return false;
    }
  }

  logOut() {
    sessionStorage.setItem("isLoggedIn", "false");
    return false;
  }
}
