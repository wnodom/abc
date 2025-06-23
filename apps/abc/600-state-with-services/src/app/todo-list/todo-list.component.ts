import { Component, output, input } from '@angular/core';

import { Task } from '../types';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html'
})
export class ToDoListComponent {
  readonly list = input.required<Task[]>();
  readonly icon = input.required<string>();
  readonly setTaskStatus = output<Task>();

  setStatus(task: Task) {
    this.setTaskStatus.emit(task);
  }
}
