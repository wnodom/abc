import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appMakeDraggable]',
  standalone: true
})
export class DragDirective {
  @HostBinding('style.position') position = 'relative';
  @HostBinding('style.padding') padding = '0.5rem';
  @HostBinding('style.color') color = 'var(--abc-on-secondary-color)';
  @HostBinding('style.backgroundColor') backgroundColor =
    'var(--abc-secondary-color)';
  @HostBinding('style.cursor') cursor = 'pointer';
  @HostBinding('style.left.px') x = 0;
  @HostBinding('style.top.px') y = 0;

  private startX = 0;
  private startY = 0;
  private mm = this.mousemove.bind(this);
  private mu = this.mouseup.bind(this);

  @HostListener('mousedown', ['$event']) mousedown(
    event: MouseEvent
  ) {
    event.preventDefault();
    this.startX = event.pageX - this.x;
    this.startY = event.pageY - this.y;
    // watch the whole window
    document.addEventListener('mousemove', this.mm);
    document.addEventListener('mouseup', this.mu);
  }

  mousemove(event: MouseEvent) {
    this.x = event.pageX - this.startX;
    this.y = event.pageY - this.startY;
  }

  mouseup() {
    document.removeEventListener('mousemove', this.mm);
    document.removeEventListener('mouseup', this.mu);
  }
}
