import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import { Task } from '../types';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html'
})
export class TodoListComponent {
  @Input() list: Task[] = [];
  @Input() icon = '';

  @Output() setTaskStatus = new EventEmitter<Task>();

  setStat(task: Task) {
    this.setTaskStatus.emit(task);
  }
}
