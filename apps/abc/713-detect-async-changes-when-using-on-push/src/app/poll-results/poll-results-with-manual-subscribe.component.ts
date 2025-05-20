import {
  ChangeDetectionStrategy,
  // ChangeDetectorRef,
  Component,
  OnDestroy,
  inject
} from '@angular/core';

import { PollResult } from './poll-results-types';
import { PollResultsService } from './poll-results.service';

@Component({
  selector: 'app-poll-results-with-manual-subscribe',
  templateUrl: './poll-results-with-manual-subscribe.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PollResultsWithManualSubscribeComponent
  implements OnDestroy
{
  // private ref = inject(ChangeDetectorRef);

  pollResults: PollResult[] = [];

  private subscription = inject(PollResultsService)
    .pollResults()
    .subscribe(results => {
      this.pollResults = results;

      // You can fix this component's behavior by explicitly telling
      // the change detector to re-evaluate this component and all of
      // its ancestors. This is what the async pipe does internally
      // whenever it receives a new value from an observable.
      // this.ref.markForCheck();
    });

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
