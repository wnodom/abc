import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import { Item } from '../item/item-types';

import { TodoItemDetailComponent } from './todo-item-detail.component';

@Component({
  selector: 'app-todo-list-onpush-strategy',
  templateUrl: './todo-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TodoItemDetailComponent]
})
export class TodoListOnpushStrategyComponent {
  @Input({ required: true }) todoItems!: Item[];
  @Output() toggleItem = new EventEmitter<number>();
}
