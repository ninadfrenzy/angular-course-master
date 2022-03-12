import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-custom-lib',
  template: `
    <p>
      my-custom-lib works!
    </p>
  `,
  styles: [
  ]
})
export class MyCustomLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
