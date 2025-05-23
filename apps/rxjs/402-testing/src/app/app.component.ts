import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { debounceTime, Observable, startWith, switchMap } from 'rxjs';

import { HeaderComponent } from '@class-materials/shared/ui-page-header';

import { Employee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    AsyncPipe,
    HeaderComponent,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    JsonPipe,
    ReactiveFormsModule
  ]
})
export class AppComponent {
  nameFilter = new FormControl('', { nonNullable: true });
  filteredTeam: Observable<Employee[]>;

  constructor() {
    const sw = inject(EmployeeService);

    this.filteredTeam = this.nameFilter.valueChanges.pipe(
      startWith(this.nameFilter.value as string),
      debounceTime(250),
      switchMap(x => sw.getFilteredList(x))
    );
  }
}
