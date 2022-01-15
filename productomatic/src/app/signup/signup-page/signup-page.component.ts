import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  signup(signupForm: NgForm) {
    delete signupForm.value.confirmPassword;
    this.authService.signupUser(signupForm.value).subscribe({
      next: (res) => {
        console.log(res);
        
      }
    })
    
  }

}
