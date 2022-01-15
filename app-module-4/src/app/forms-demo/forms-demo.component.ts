import { Component, ElementRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-forms-demo',
  templateUrl: './forms-demo.component.html',
  styleUrls: ['./forms-demo.component.css']
})
export class FormsDemoComponent implements OnInit {
  myForm: FormGroup = new FormGroup({});
  posts: any;
  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      'name': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'age': new FormControl('', [Validators.min(4)]),
      'email': new FormControl('', [Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]),
      'password': new FormControl('', [Validators.required])

    })
    let req = this.httpService.getPosts();
    req.subscribe({
      next: (res) => {
        this.posts=res;
      }
    })
    
    
  }
  onFormSubmit(ref: NgForm) {
    this.httpService.sendPost(ref.value);
    
  }
  onReactiveSubmit() {
    console.log(this.myForm);
    
  }
}


// { key: value}