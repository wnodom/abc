import { Component, inject } from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule
} from '@angular/forms';

import { WorkerComponent } from './worker.component';

@Component({
  selector: 'app-manager-cmp',
  templateUrl: './manager.component.html',
  imports: [ReactiveFormsModule, WorkerComponent]
})
export class ManagerComponent {
  testGroup = inject(NonNullableFormBuilder).group({
    showing: [false],
    testVal: [''],
    testVal2: [''],
    testVal3: ['']
  });
}
