import { Directive, ElementRef, Renderer2, HostListener, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[cp1]'
})
export class CpDirective implements AfterViewInit {

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2) {

  }

  toggleFlag = false;
  ngAfterViewInit() {
    this.renderer.listen(this.elRef.nativeElement, 'click', () => {

      this.toggleFlag = !this.toggleFlag;
      if (this.toggleFlag) {
        this.renderer.setStyle(this.elRef.nativeElement, 'color', 'red');
      } else {
        this.renderer.removeStyle(this.elRef.nativeElement, 'color');
      }

    });
  }
}
