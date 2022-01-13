import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css'],
})
export class OperatorsComponent implements OnInit {
  myCondition: boolean = true;
  listElements: Array<string> = [
    'element 1',
    'element 2',
    'element 3',
    'element 4',
    'element 5',
    'element 6',
    'element 7',
    'element 8',
    'element 9',
    'element 10',
    'element 11',
  ];
  constructor() {}

  ngOnInit(): void {}

  changeCondition(): void {
    this.myCondition = !this.myCondition;
  }
}
