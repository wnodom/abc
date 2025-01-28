import { Component } from '@angular/core';

import { TodoListComponent } from '../../todo-list/todo-list.component';
import { Task } from '../../types';

@Component({
  selector: 'app-home-task-list',
  templateUrl: './home-task-list.component.html',
  imports: [TodoListComponent]
})
export class HomeTaskListComponent {
  done = [
    { label: 'cook dinner' },
    { label: 'go grocery shopping' },
    { label: 'sweep the floors' },
    { label: 'do the laundry' }
  ];

  todo = [
    { label: 'fix the leaky faucet' },
    { label: 'mow the lawn' }
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
