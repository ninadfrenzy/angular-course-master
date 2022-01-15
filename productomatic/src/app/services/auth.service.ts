import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  signupUser(user: any) {
    return this.httpClient.post('http://localhost:3000/api/v1/users', user);
  }
  loginUser(user: any) {
    return this.httpClient.post('http://localhost:3000/api/v1/auth', user);
  }
  isUserLoggedIn():boolean {
    if(localStorage.getItem('userToken')) {
      return true;
    } else {
      return false;
    }
  }
  getUserToken() {
    if(this.isUserLoggedIn()) {
      return localStorage.getItem('userToken');
    } else {
      return null;
    }
  }
  logout():boolean {
    localStorage.removeItem('userToken');
    return true;
  }
}
