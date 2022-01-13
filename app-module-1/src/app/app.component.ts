import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'app-module-2';
  fromChild!:string;
  public constructor() {
    console.log('Hello from AppComponent');
  }

  updateTitle() {
    this.title='new title';
  }
  catchAndShow(data:any) {
    this.fromChild = data;
  }
}
