import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-err-page',
  templateUrl: './err-page.component.html',
  styleUrls: ['./err-page.component.css']
})
export class ErrPageComponent implements OnInit {
  errMessage: string = '';
  constructor(private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.errMessage = this.activeRoute.snapshot.data['message'];
  }

}
