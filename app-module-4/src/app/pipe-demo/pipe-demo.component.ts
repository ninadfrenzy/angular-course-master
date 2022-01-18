import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {
  nameObs: Observable<number> = new Observable<number>();
  name: string = '';
  status: number = 0.67;
  myObj = {
    name: 'abcd',
    id: 1,
    age: 10
  }
  currentDate = new Date();
  price: number = 500;
  birthDate: Date = new Date('12-01-1997')
  constructor() { }

  ngOnInit(): void {
    this.nameObs = new Observable<number>((observer: Subscriber<number>) => {
      let count=0;
      setInterval(() => {
        observer.next(count);
        count++;
      }, 10000)
    });

  }

}
