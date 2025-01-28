import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBorder]',
  standalone: true
})
export class BorderDirective {
  @Input() color = 'var(--abc-border-color)';

  @HostBinding('style.border') get borderColor() {
    return `5px solid ${this.color}`;
  }
}
