import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';

import { ColorSchemeObserver } from '@class-materials/shared/util-color-scheme-observer';

import { ClickService } from '../click.service';

@Component({
  selector: 'app-local-click',
  template: `
    @let colorScheme = colorScheme$ | async;
    <button>
      <img
        src="assets/abc-logo-{{ colorScheme }}-mode.svg"
        (click)="increment()"
        alt="Angular Boot Camp"
      />
    </button>
    <h4># of Clicks: {{ totalClicks | async }}</h4>
  `,
  styleUrl: './click.component.scss',
  imports: [AsyncPipe]
})
export class ClickComponent {
  readonly colorScheme$ = inject(ColorSchemeObserver).observe();
  private service = inject(ClickService);

  readonly totalClicks = this.service.clickCount;

  increment() {
    this.service.increment().catch(err => console.log(err));
  }
}
