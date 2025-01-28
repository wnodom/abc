import { Component } from '@angular/core';

import { Task } from '../types';

import { HomeTaskListComponent } from './home-task-list/home-task-list.component';
import { WorkTaskListComponent } from './work-task-list/work-task-list.component';

/*
  Notice the bloat this top level component has taken on. It needs
  to "own" the data in order to make the appropriate modifications.
  Problems: file size/scope, mixing of concerns, all other problems
  associated with monoliths.
*/

@Component({
  templateUrl: './dont.component.html',
  imports: [WorkTaskListComponent, HomeTaskListComponent]
})
export default class DontComponent {
  doneWork = [
    { label: 'file paperwork' },
    { label: 'send emails' },
    { label: 'work on project A' },
    { label: 'submit report to manager' }
  ];

  todoWork = [
    { label: 'work on project B' },
    { label: 'update task list' }
  ];

  doneHome = [
    { label: 'cook dinner' },
    { label: 'go grocery shopping' },
    { label: 'sweep the floors' },
    { label: 'do the laundry' }
  ];

  todoHome = [
    { label: 'fix the leaky faucet' },
    { label: 'mow the lawn' }
  ];

  // This method is a perfect example of the complexity that's created when
  // all of your state is managed from one location.
  toggleTask(task: Task, complete: boolean, type: string) {
    if (complete && type === 'work') {
      this.doneWork = this.doneWork.filter(
        curTask => curTask !== task
      );
      this.todoWork.push(task);
    } else if (!complete && type === 'work') {
      this.todoWork = this.todoWork.filter(
        curTask => curTask !== task
      );
      this.doneWork.push(task);
    } else if (complete && type === 'home') {
      this.doneHome = this.doneHome.filter(
        curTask => curTask !== task
      );
      this.todoHome.push(task);
    } else if (!complete && type === 'home') {
      this.todoHome = this.todoHome.filter(
        curTask => curTask !== task
      );
      this.doneHome.push(task);
    }
  }

  completeAll() {
    this.todoHome.forEach(task => this.doneHome.push(task));
    this.todoHome = [];
    this.todoWork.forEach(task => this.doneWork.push(task));
    this.todoWork = [];
  }
}
