import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

const apiUrl = '/api';

// Or connect to the hosted demo API (works from StackBlitz):
// const apiUrl = 'https://api.angularbootcamp.com';

interface Employee {
  id: number;
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true
})
export class AppComponent {
  employees: Employee[] = [];
  loading = true;

  constructor() {
    const http = inject(HttpClient);

    http
      .get<Employee[]>(apiUrl + '/employees')
      .subscribe(employees => {
        this.loading = false;
        this.employees = employees;
      });
  }
}
