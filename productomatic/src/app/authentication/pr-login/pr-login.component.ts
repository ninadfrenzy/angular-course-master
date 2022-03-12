import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-pr-login',
  templateUrl: './pr-login.component.html',
  styleUrls: ['./pr-login.component.css']
})
export class PrLoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService, private auth: AngularFireAuth) { }

  ngOnInit(): void {
  }

  login(form: NgForm) {
    //perform authentication
    // this.authService.loginUser(form.value).subscribe({
    //   next: (res: any) => {
    //     console.log(res);
    //     localStorage.setItem('userToken', res['token']);
    //     this.router.navigateByUrl('products');
    //   },
    //   error: (err) => {
    //     console.log(err);
    //     this.router.navigateByUrl('');
        
    //   }
    // })
    //on success
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((user) => {
      this.router.navigateByUrl('products');
      
    }).catch((err) => {
      console.error(err);
      
    })

  }

}
