import {
  Directive,
  Renderer2,
  ElementRef,
  OnInit,
  HostListener,
  Input,
  HostBinding
} from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective implements OnInit {
  @Input() defaultColor = 'transparent';
  @Input() highlightedColor = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor = this.defaultColor;
  constructor(private renderer: Renderer2, private eleRef: ElementRef ) {
  }
  ngOnInit() {
    // this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'blue');
  }
  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'blue');
     this.backgroundColor = this.defaultColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.eleRef.nativeElement , 'background-color', 'transparent');
    this.backgroundColor = this.highlightedColor;
  }
}
