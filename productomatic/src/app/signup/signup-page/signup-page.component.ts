import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  signup(signupForm: NgForm) {
    console.log(signupForm);
    
  }

}
