import { Component, Input, numberAttribute } from '@angular/core';

import { Order } from '../api-types';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html'
})
export class OrderListComponent {
  // Defaults to property name = variable name.
  // Can override with @Input('name') or @Input({alias: 'name'}).
  @Input({ required: true }) orders!: Order[];

  // This could be derived from orders, but we want to show the
  // transform.
  @Input({ required: true, transform: numberAttribute })
  count!: number;
}
