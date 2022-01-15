import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  login(form: NgForm) {
    //perform authentication
    this.authService.loginUser(form.value).subscribe({
      next: (res: any) => {
        console.log(res);
        localStorage.setItem('userToken', res['token']);
        this.router.navigateByUrl('product-home');
      },
      error: (err) => {
        console.log(err);
        this.router.navigateByUrl('');
        
      }
    })
    //on success
    
  }

}
