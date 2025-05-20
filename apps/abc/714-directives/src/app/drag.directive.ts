import { Directive } from '@angular/core';

@Directive({
  selector: '[appMakeDraggable]',
  host: {
    '[style.position]': 'position',
    '[style.padding]': 'padding',
    '[style.color]': 'color',
    '[style.backgroundColor]': 'backgroundColor',
    '[style.cursor]': 'cursor',
    '[style.left.px]': 'x',
    '[style.top.px]': 'y',
    '(mousedown)': 'mousedown($event)'
  }
})
export class DragDirective {
  position = 'relative';
  padding = '0.5rem';
  color = 'var(--abc-on-secondary-color)';
  backgroundColor = 'var(--abc-secondary-color)';
  cursor = 'pointer';
  x = 0;
  y = 0;

  private startX = 0;
  private startY = 0;
  private mm = this.mousemove.bind(this);
  private mu = this.mouseup.bind(this);

  mousedown(event: MouseEvent) {
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
