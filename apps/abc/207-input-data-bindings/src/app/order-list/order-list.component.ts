import { Component, numberAttribute, input } from '@angular/core';

import { Order } from '../api-types';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html'
})
export class OrderListComponent {
  // Defaults to property name = variable name, but can be
  // aliased with input({alias: 'name'}).
  readonly orders = input.required<Order[]>();

  // This could be derived from orders, but we want to show the
  // transform.
  readonly count = input.required<number, unknown>({
    transform: numberAttribute
  });
}
