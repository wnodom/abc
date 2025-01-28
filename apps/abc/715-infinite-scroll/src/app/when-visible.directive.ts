import {
  Directive,
  ElementRef,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  inject
} from '@angular/core';

@Directive({
  selector: '[appWhenVisible]',
  standalone: true
})
export class WhenVisibleDirective implements OnInit, OnDestroy {
  private element = inject(ElementRef);

  @Output() appWhenVisible = new EventEmitter();

  private observer: IntersectionObserver | undefined;

  ngOnInit() {
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.appWhenVisible.emit();
      }
    }, {});

    this.observer.observe(this.element.nativeElement);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
