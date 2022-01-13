import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() fromParent!: string;
  @Output() sendToParent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  sendData() {
    this.sendToParent.emit("child");
  }
}
