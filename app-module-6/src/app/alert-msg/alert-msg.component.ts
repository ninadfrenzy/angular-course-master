import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-msg',
  templateUrl: './alert-msg.component.html',
  styleUrls: ['./alert-msg.component.css']
})
export class AlertMsgComponent implements OnInit {

  constructor() { }
  msg:string = '';
  ngOnInit(): void {
  }
  alertMe() {
    alert(this.msg);
  }
}
