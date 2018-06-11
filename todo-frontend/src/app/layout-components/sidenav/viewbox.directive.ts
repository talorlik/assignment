import { Directive, ElementRef, Input, OnInit, OnChanges } from '@angular/core';

@Directive({
  selector: '[vatitViewbox]'
})
export class ViewboxDirective {

  @Input('vatitViewbox') viewBox: string;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    this.el.nativeElement.setAttribute('viewBox', this.viewBox);
  }

  ngOnChanges() {
    this.el.nativeElement.setAttribute('viewBox', this.viewBox);
  }
}
