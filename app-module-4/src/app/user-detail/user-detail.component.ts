import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  username: string = '';
  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.activeRoute.snapshot.params);

    this.activeRoute.params.subscribe((data: Params) => {
      this.username = data['user'];
    })
  }

}
