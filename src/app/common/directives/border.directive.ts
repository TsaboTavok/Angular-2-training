import { Directive, HostListener, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBorder]'
})
export class BorderDirective {
  @Input() appBorder: string;

  constructor(private render: Renderer2, private el: ElementRef) {
  }

  @HostListener('click') onClick() {
    this.render.setStyle(this.el.nativeElement, 'border', this.appBorder);
  }
}
