import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject
} from '@angular/core';

import { PollResultsService } from './poll-results.service';

@Component({
  selector: 'app-poll-results-with-async-pipe',
  templateUrl: './poll-results-with-async-pipe.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe]
})
export class PollResultsWithAsyncPipeComponent {
  pollResults = inject(PollResultsService).pollResults();
}
