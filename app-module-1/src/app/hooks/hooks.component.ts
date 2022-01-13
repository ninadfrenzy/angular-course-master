import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css'],
})
export class HooksComponent
  implements
    OnInit,
    OnChanges,
    OnDestroy,
    DoCheck,
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit
{
  constructor() {
    console.log('in the hook constructor');
  }
  ngOnInit(): void {
    console.log('in the hook ngOnInit');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('in the hook ngOnChanges');
  }
  ngDoCheck(): void {
    console.log('in the hook ngDoCheck');
  }
  ngAfterContentChecked(): void {
    console.log('in the hook ngAfterContentChecked');
  }
  ngAfterContentInit(): void {
    console.log('in the hook ngAfterContentInit');
  }
  ngAfterViewChecked(): void {
    console.log('in the hook ngAfterViewChecked');
  }
  ngAfterViewInit(): void {
    console.log('in the hook ngAfterViewInit');
  }
  ngOnDestroy(): void {
    console.log('in the hook ngOnDestroy');
  }
}
