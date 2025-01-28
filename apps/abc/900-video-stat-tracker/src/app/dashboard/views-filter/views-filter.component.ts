import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule
} from '@angular/forms';

import { DashboardService } from '../dashboard.service';

// Unlike the top-list component, this one is tightly coupled
// to the service. This approach is helpful for more complex features
// that do not lend themselves well to reuse.
@Component({
  selector: 'vst-views-filter',
  templateUrl: './views-filter.component.html',
  styleUrl: './views-filter.component.scss',
  imports: [ReactiveFormsModule]
})
export class ViewsFilterComponent {
  filterFormGroup: FormGroup<{
    region: FormControl<string>;
    dateTo: FormControl<string>;
    dateFrom: FormControl<string>;
    minor: FormControl<boolean>;
    adults: FormControl<boolean>;
    middleAged: FormControl<boolean>;
    retired: FormControl<boolean>;
  }> = inject(DashboardService).filterForm;
}
