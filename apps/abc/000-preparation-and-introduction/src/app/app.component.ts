import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';

import { ColorSchemeObserver } from '@class-materials/shared/util-color-scheme-observer';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrl: 'app.component.scss',
  imports: [AsyncPipe]
})
export class AppComponent {
  readonly colorScheme$ = inject(ColorSchemeObserver).observe();
}
