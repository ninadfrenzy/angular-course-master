import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../data-store.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  myMessage: string = "";
  constructor(private data: DataStoreService) { }

  ngOnInit(): void {
    this.getMessage();
  }

  getMessage() {
    this.data.message.subscribe((latestMessage) => {
      this.myMessage = latestMessage;
    })
  }

  setMessage() {
    this.data.setMessage("Hi there", "component 2");
  }

}
