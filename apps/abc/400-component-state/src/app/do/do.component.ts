import { Component } from '@angular/core';

import { HomeTaskListComponent } from './home-task-list/home-task-list.component';
import { WorkTaskListComponent } from './work-task-list/work-task-list.component';

@Component({
  templateUrl: './do.component.html',
  imports: [WorkTaskListComponent, HomeTaskListComponent]
})
export default class DoComponent {}
