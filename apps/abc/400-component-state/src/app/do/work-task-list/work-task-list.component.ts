import { Component } from '@angular/core';

import { TodoListComponent } from '../../todo-list/todo-list.component';
import { Task } from '../../types';

@Component({
  selector: 'app-work-task-list',
  templateUrl: './work-task-list.component.html',
  imports: [TodoListComponent]
})
export class WorkTaskListComponent {
  done = [
    { label: 'file paperwork' },
    { label: 'send emails' },
    { label: 'work on project A' },
    { label: 'submit report to manager' }
  ];

  todo = [
    { label: 'work on project B' },
    { label: 'update task list' }
  ];

  checkbox = 'check_box';
  outline = 'check_box_outline_blank';

  toggleTask(task: Task, complete: boolean) {
    if (complete) {
      this.done = this.done.filter(curTask => curTask !== task);
      this.todo.push(task);
    } else {
      this.todo = this.todo.filter(curTask => curTask !== task);
      this.done.push(task);
    }
  }
}
