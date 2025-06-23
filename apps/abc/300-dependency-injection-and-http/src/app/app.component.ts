import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

// Local API server
// const apiUrl = '/api';

// Hosted API server
const apiUrl = 'https://api.angularbootcamp.com';

interface Employee {
  id: number;
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
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
