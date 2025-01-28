import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

const apiUrl = '/api';

// Or connect to the hosted demo API (works from StackBlitz):
// const apiUrl = 'https://api.angularbootcamp.com';

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
}

@Injectable({
  // This service should be created
  // by the root application injector.
  providedIn: 'root'
})
export class EmployeeLoaderService {
  private http = inject(HttpClient);

  loadEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(apiUrl + '/employees');
  }
}
