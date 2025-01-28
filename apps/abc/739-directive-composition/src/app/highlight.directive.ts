import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  @Input() color = 'var(--abc-highlight-color)';

  @HostBinding('style.backgroundColor') get backgroundColor() {
    return this.color;
  }
}
