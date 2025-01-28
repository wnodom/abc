import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { delay } from 'rxjs';

const apiUrl = '/api';

export interface Worker {
  id: number;
  firstName: string;
}

@Injectable({
  providedIn: 'root'
})
export class WorkersService {
  private http = inject(HttpClient);

  workerList() {
    const delayUntil: Date = new Date(Date.now() + 1600);
    return this.http
      .get<Worker[]>(apiUrl + '/employees')
      .pipe(delay(delayUntil));
  }
}
