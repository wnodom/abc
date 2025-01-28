import { Component } from '@angular/core';

import { PollResultsWithAsyncPipeComponent } from './poll-results/poll-results-with-async-pipe.component';
import { PollResultsWithManualSubscribeComponent } from './poll-results/poll-results-with-manual-subscribe.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    PollResultsWithManualSubscribeComponent,
    PollResultsWithAsyncPipeComponent
  ]
})
export class AppComponent {}
