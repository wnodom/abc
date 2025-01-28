import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

export interface WorkTask {
  id: number;
  title: string;
  description: string;
  responsibleParty: string;
  estimatedTime: number;
  priority: number;
}

const apiUrl = '/api';

@Injectable({
  providedIn: 'root'
})
export class WorkTaskLoader {
  private http = inject(HttpClient);

  getList(): Observable<WorkTask[]> {
    return this.http.get<WorkTask[]>(apiUrl + '/worktasks');
  }
}
