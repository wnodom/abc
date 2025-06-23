import { Component, input } from '@angular/core';

import { Employee } from '../employee-loader.service';

@Component({
  selector: 'app-employee-display',
  templateUrl: './employee-display.component.html'
})
export class EmployeeDisplayComponent {
  readonly employee = input.required<Employee | undefined>();
}
