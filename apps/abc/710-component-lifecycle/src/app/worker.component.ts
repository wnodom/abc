import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  inject
} from '@angular/core';
import { Subscription } from 'rxjs';

import { Worker, WorkersService } from './workers.service';

@Component({
  selector: 'app-worker-cmp',
  templateUrl: './worker.component.html',
  standalone: true
})
export class WorkerComponent implements OnInit, OnChanges, OnDestroy {
  @Input({ required: true }) label!: string;
  @Input({ required: true }) label2!: string;

  workerList: Worker[] = [];
  intervalVal = 0;

  private secondListSubscription: Subscription;
  private intervalHandle: number;

  constructor() {
    const workers = inject(WorkersService);

    console.log('constructor', this.label);

    this.secondListSubscription = workers
      .workerList()
      .subscribe(list => {
        console.log('workerList updated');
        this.workerList = list;
      });

    this.intervalHandle = window.setInterval(() => {
      this.intervalVal += 1;
      console.log('intervalVal:', this.intervalVal);
    }, 1000);
  }

  ngOnInit() {
    console.log('ngOnInit', this.label);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('A change has occurred', changes);
    if (changes['label']) {
      console.log(changes['label'].currentValue);
    }
  }

  ngOnDestroy() {
    console.log('onDestroy called, cleaning up');
    this.secondListSubscription.unsubscribe();
    clearInterval(this.intervalHandle);
  }
}
