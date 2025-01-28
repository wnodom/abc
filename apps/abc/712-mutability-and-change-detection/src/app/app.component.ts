import { Component, inject } from '@angular/core';

import { ItemService } from './item/item.service';
import { TodoListDefaultStrategyComponent } from './todo-list/todo-list-default-strategy.component';
import { TodoListOnpushStrategyComponent } from './todo-list/todo-list-onpush-strategy.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    TodoListDefaultStrategyComponent,
    TodoListOnpushStrategyComponent
  ]
})
export class AppComponent {
  ids = inject(ItemService);

  addTodo() {
    const description = window.prompt('Description:');
    if (description) {
      this.ids.addItem({ description, completed: false });
    }
  }
}
