import { Component } from '@angular/core';

const meetings = [
  {
    description: 'Standup',
    participants: ['John', 'Paul', 'Ringo', 'George']
  },
  {
    description: 'Meet with the Bills',
    participants: ['Bill', 'Bill', 'Peter']
  },
  { description: 'Working lunch', participants: ['Joe', 'Jane'] }
];

const todoList = [
  { label: 'Attach cover letter to TPS report' },
  { label: 'Double check decimal places' },
  { label: 'Jump to conclusions' }
];

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  standalone: true
})
export default class UserDashboardComponent {
  showProfile = true;
  nextMeetings = meetings;
  todos = todoList;

  addTodo() {
    // Add a new item at the beginning of the todo list.
    this.todos.unshift({ label: `Task ${this.todos.length + 1}` });
  }
}
