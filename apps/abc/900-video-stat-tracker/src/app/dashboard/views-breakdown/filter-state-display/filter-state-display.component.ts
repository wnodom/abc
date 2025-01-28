import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'vst-filter-state-display',
  templateUrl: './filter-state-display.component.html',
  styleUrl: './filter-state-display.component.scss',
  imports: [DatePipe]
})
export class FilterStateDisplayComponent {
  filterForm: FormGroup<{
    region: FormControl<string>;
    dateTo: FormControl<string>;
    dateFrom: FormControl<string>;
    minor: FormControl<boolean>;
    adults: FormControl<boolean>;
    middleAged: FormControl<boolean>;
    retired: FormControl<boolean>;
  }> = inject(DashboardService).filterForm;
}
