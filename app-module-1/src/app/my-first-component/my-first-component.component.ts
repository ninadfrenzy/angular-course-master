import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-my-first-component',
  templateUrl: './my-first-component.component.html',
  styleUrls: ['./my-first-component.component.css']
})
export class MyFirstComponentComponent implements OnInit {
  @Input() inputVar!:string;
  @Input() test='';
  @Output() opEvt = new EventEmitter<string>();
  inputText:string = "test";
  myModelVar:string = "initial value";
  

  constructor() { }

  ngOnInit(): void {
  }

  logMyCommand() {
    console.log("button is clicked");
  }

  showText(event:any) {
    console.log(event.target.value);
  }

  sendToParent() {
    this.opEvt.emit("sending value")
  }

  updateValue() {
    this.inputText = "updated text";
  }

}
