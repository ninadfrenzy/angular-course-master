import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private router: Router) { }
  users: Array<string> = [
    'User1',
    'User2',
    'User3',
    'User4',
    'User5',
  ]
  ngOnInit(): void {
  }
  logAndGoToHome() {
    console.log("UsersComponent");
    this.router.navigateByUrl('');
    
  }
  showUserDetail(user: string) {
    this.router.navigateByUrl('users/userdetail'+'/'+user);
  }
}
