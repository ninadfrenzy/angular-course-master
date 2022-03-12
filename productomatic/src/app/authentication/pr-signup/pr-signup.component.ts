import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-pr-signup',
  templateUrl: './pr-signup.component.html',
  styleUrls: ['./pr-signup.component.css']
})
export class PrSignupComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  signup(signupForm: NgForm) {
    delete signupForm.value.confirmPassword;
    this.authService.signupUser(signupForm.value).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigateByUrl('auth')
        
      }
    })
    
  }
}
