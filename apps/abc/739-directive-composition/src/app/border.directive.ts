import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appBorder]',
  host: {
    '[style.border]': 'getBorderColor()'
  }
})
export class BorderDirective {
  @Input() color = 'var(--abc-border-color)';

  getBorderColor() {
    return `5px solid ${this.color}`;
  }
}
