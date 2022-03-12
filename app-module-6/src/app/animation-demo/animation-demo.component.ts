import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
  group,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation-demo',
  templateUrl: './animation-demo.component.html',
  styleUrls: ['./animation-demo.component.css'],
  animations: [
    trigger('screensaver', [
      state(
        'initial',
        style({
          transform: 'translateX(0) translateY(0)',
          'background-color': 'yellow',
        })
      ),
      state(
        'bottom',
        style({
          transform: 'translateY(86vh)',
          'background-color': 'yellow',
        })
      ),
      state(
        'right',
        style({
          transform: 'translateX(50vw) translateY(50vh)',
          'background-color': 'yellow',
        })
      ),
      state(
        'left',
        style({
          transform: 'translateX(-40vw) translateY(50vh)',
          'background-color': 'yellow',
        })
      ),
      transition('initial => bottom', [animate('1s')]),
      transition('bottom => right', [animate('1s')]),
      transition('right => left', [animate('1s')]),
      transition('left => initial', [animate('1s')]),
    ]),
  ],
})
export class AnimationDemoComponent implements OnInit {
  state: string = 'initial';
  constructor() {}

  ngOnInit(): void {}

  updateState($event: any) {
    let state = $event.toState;
    
    if(state === 'initial') {
      this.state = 'bottom';
    }
    if(state === 'bottom') {
      this.state = 'right';
    }
    if(state === 'right') {
      this.state = 'left';
    }
    if(state === 'left') {
      this.state = 'initial';
    }
    
  }
}
