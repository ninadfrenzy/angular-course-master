import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  sendToChild: string = "parent";
  receivedFromChild!: string;
  constructor() { }

  ngOnInit(): void {
  }

  updateFromChild(data:any) {
    this.receivedFromChild = data;
  }

}
