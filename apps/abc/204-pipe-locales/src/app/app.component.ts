import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';

import { upcomingSessions } from './sessions';

/**
 * DecimalPipe, CurrencyPipe, PercentPipe, and DatePipe are all localized.
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [CurrencyPipe, DatePipe]
})
export class AppComponent {
  sessions = upcomingSessions;
}
