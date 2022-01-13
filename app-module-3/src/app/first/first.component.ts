import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../data-store.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
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
    this.data.setMessage("hello world", "component first");
  }

}
