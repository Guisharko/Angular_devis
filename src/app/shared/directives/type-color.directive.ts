import { Directive, Input, OnInit, HostBinding, OnChanges, ElementRef, Renderer2, SimpleChanges } from '@angular/core';
import { TypePrestation } from '../enums/type-prestation.enum';
import { Statement } from '@angular/compiler';
import { Prestation } from '../models/prestation';


// <div [appTypeColor]="">
// <my-component [appTypeColor]="">

@Directive({
  selector: '[appTypeColor]'
})
export class TypeColorDirective implements OnInit, OnChanges {
  @Input() appTypeColor: Prestation;
  @Input() statusColor: Prestation;
  //@HostBinding('class') myClass: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    console.log(this.appTypeColor)

  }

  ngOnChanges(changes : SimpleChanges) {
    this.renderer.addClass(this.elRef.nativeElement,
      this.formatClass(this.appTypeColor.type) )
  }

  private formatClass(type: TypePrestation) {
    // Coaching --> type-coaching
    // Formation --> type-formation
    return `type-${type.toLowerCase()}`;

    // Annulé -- state-annulé



  }

}
