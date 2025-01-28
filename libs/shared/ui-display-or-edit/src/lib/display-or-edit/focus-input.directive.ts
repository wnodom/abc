import {
  AfterViewInit,
  Directive,
  ElementRef,
  inject
} from '@angular/core';

@Directive({
  selector: '[oasisFocusInput]',
  standalone: true
})
export class FocusInputDirective implements AfterViewInit {
  private el = inject(ElementRef);

  ngAfterViewInit() {
    this.el.nativeElement.focus();
  }
}
