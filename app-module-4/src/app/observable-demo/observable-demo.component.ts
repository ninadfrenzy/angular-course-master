import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscriber, from, Subscription } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css'],
})
export class ObservableDemoComponent implements OnInit, OnDestroy{
  sub!: Subscription;
  constructor() {}

  ngOnInit(): void {
    let ob = new Observable((observer: Subscriber<number>) => {
      let count=0;
      setInterval(()=> {
        observer.next(count);
        count++;
        
      },1000)
    });
    this.sub = ob.subscribe(data=> console.log(data));
  }

  ngOnDestroy(): void {
      this.sub.unsubscribe();
  }
}
