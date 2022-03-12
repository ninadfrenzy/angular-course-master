import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  myNum = 10;
  myStr = '';
  myBool = false;
  message = 'Page was loaded successfully';
  constructor(private msgService:MessageService) { }

  ngOnInit(): void {
    this.myStr = this.msgService.getData();
  }

  addNums(a:number, b:number) {
    return a+b;
  }

}
