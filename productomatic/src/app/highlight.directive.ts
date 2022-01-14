import { Directive, ElementRef, HostListener, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{

  
  constructor(private elementRef: ElementRef) { }
  @HostListener('mouseenter') mouseOver() {
    this.elementRef.nativeElement.style.backgroundColor = 'tomato';
  }
  @HostListener('mouseleave') mouseExit() {
    this.elementRef.nativeElement.style.backgroundColor = 'white';
  }
  ngOnInit(): void {
      
  }

}
