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
  @Input({ required: true }) list!: Task[];
  @Input({ required: true }) icon!: string;

  @Output() setTaskStatus = new EventEmitter<Task>();

  setStat(task: Task) {
    this.setTaskStatus.emit(task);
  }
}
