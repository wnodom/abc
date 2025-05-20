import { Component, OnDestroy, inject } from '@angular/core';

import {
  Employee,
  EmployeeLoaderService
} from './employee-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnDestroy {
  employees: Employee[] = [];
  loading = true;

  subscription = inject(EmployeeLoaderService)
    .loadEmployees()
    .subscribe(employees => {
      this.employees = employees;
      this.loading = false;
    });

  // Since this component doesn't know the "source" of the observable,
  // it is a good practice to perform "clean-up" on it via the OnDestroy
  // hook.
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
