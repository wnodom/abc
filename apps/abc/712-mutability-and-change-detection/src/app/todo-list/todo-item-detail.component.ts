import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output
} from '@angular/core';

import { Item } from '../item/item-types';

@Component({
  selector: 'app-item-detail',
  templateUrl: './todo-item-detail.component.html',
  changeDetection: ChangeDetectionStrategy.Default,
  standalone: true
})
export class TodoItemDetailComponent {
  @Input({ required: true }) item: Item | undefined;
  @Output() toggleItem = new EventEmitter<void>();

  @HostListener('click')
  onClick() {
    this.toggleItem.emit();
  }

  transform(input: boolean) {
    const checkMark = '\u2713';
    const checkbox = '\u2751';
    return input ? checkMark : checkbox;
  }
}
