import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  host: {
    '[style.backgroundColor]': 'getBackgroundColor()'
  }
})
export class HighlightDirective {
  @Input() color = 'var(--abc-highlight-color)';

  getBackgroundColor() {
    return this.color;
  }
}
