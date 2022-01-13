import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appEvenOdd]'
})
export class EvenOddDirective implements OnInit {

  @Input('appEvenOdd') num: number = 0; 
  constructor(private elementRef: ElementRef) { }
  @HostListener('mouseenter') mouseOver() {
    this.setBackground(this.num%2 == 0? 'green': 'red');
  }
  @HostListener('mouseleave') mouseExit() {
    this.setBackground('blue');
  }
  ngOnInit(): void {
      this.elementRef.nativeElement.style.backgroundColor = 'blue';
      this.elementRef.nativeElement.style.color = 'white';
      
      
  }

  setBackground(color: string) {
    this.elementRef.nativeElement.style.backgroundColor = color;
  }

}
