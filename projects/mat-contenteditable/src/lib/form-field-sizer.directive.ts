import { Directive, Renderer2, ElementRef, AfterContentInit } from '@angular/core';

@Directive({
  selector: '[formFieldSizer]'
})
export class FormFieldSizerDirective implements AfterContentInit {

  constructor(
    private readonly renderer: Renderer2,
    private readonly elementRef: ElementRef,
  ) { }

  ngAfterContentInit(): void {
    this.updateSize();
  }

  updateSize() {
    const offset = this.elementRef.nativeElement.offsetHeight -
      this.getElement('mat-form-field-wrapper').offsetHeight;
    this.renderer.setStyle(this.getElement('mat-form-field-infix'), 'min-height', `${offset}px`);
  }

  private getElement(name: string) {
    return this.elementRef.nativeElement.getElementsByClassName(name).item(0);
  }

}
