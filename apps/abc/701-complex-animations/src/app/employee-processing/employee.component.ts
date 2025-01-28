import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';

import { EmployeeLoaderService } from './employee-loader.service';
import { changeStatus, listArrival } from './employee.animations';

@Component({
  selector: 'app-employee-component',
  templateUrl: './employee.component.html',
  animations: [changeStatus, listArrival],
  imports: [AsyncPipe]
})
export default class EmployeeComponent {
  employees = inject(EmployeeLoaderService).loadEmployees();

  status = 'New';

  statusChange() {
    if (this.status === 'New') {
      this.status = 'In Progress';
    } else if (this.status === 'In Progress') {
      this.status = 'In Review';
    } else if (this.status === 'In Review') {
      this.status = 'Complete';
    } else {
      this.status = 'New';
    }
  }
}
