import { Component } from '@angular/core';

import { ClockComponent } from './clock.component';
import { DataGridComponent } from './data-grid.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [ClockComponent, DataGridComponent]
})
export class AppComponent {}
