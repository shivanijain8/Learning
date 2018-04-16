import { Directive, OnInit, Input, TemplateRef, ViewContainerRef } from '@angular/core';
  @Directive({
    selector: '[appCustomStructuralDirective]'
  })
  export class CustomStructuralDirective implements OnInit {
      @Input() set appCustomStructuralDirective(condition: boolean) {
          if (!condition) {
            this.viewCont.createEmbeddedView(this.templateRef);
          } else {
            this.viewCont.clear();
          }
      }
      ngOnInit() {}
      constructor(private templateRef: TemplateRef<any> , private viewCont: ViewContainerRef) {}
  }
