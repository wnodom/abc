import { Component, Input } from '@angular/core';

import { Employee } from '../employee-loader.service';

@Component({
  selector: 'app-employee-display',
  template: '{{ employee.firstName }} {{ employee.lastName}}',
  standalone: true
})
export class EmployeeDisplayComponent {
  @Input({ required: true }) employee!: Employee;
}
