import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-demo',
  templateUrl: './directives-demo.component.html',
  styleUrls: ['./directives-demo.component.css']
})
export class DirectivesDemoComponent implements OnInit {
  status: boolean = true;
  isDarkMode: boolean = false;
  numbers: Array<number> =[1,2,3,4,5,6,7,8,9,10];
  favColor: string = 'yellow';
  constructor() { }

  ngOnInit(): void {
  }

  toggleStatus() {
    this.status = !this.status;
  }
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
  }

}
