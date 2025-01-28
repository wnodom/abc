import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import { TodoListComponent } from '../../todo-list/todo-list.component';
import { Task, TaskToggle } from '../../types';

/*
  Notice that the component becomes a pass through...
  Q: So why not just remove the component?
  A: Why use multiple components at all?
*/
@Component({
  selector: 'app-home-task-list',
  templateUrl: './home-task-list.component.html',
  imports: [TodoListComponent]
})
export class HomeTaskListComponent {
  @Input({ required: true }) done!: Task[];
  @Input({ required: true }) todo!: Task[];
  @Output() toggleTask = new EventEmitter<TaskToggle>();

  checkbox = 'check_box';
  outline = 'check_box_outline_blank';

  toggle(outputTask: Task, outputComplete: boolean) {
    this.toggleTask.emit({
      task: outputTask,
      complete: outputComplete
    });
  }
}
