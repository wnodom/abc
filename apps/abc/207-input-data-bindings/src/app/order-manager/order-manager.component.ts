import { Component, signal } from '@angular/core';

import { Order, mockApiOrders } from '../api-types';
import { OrderDetailsComponent } from '../order-details/order-details.component';
import { OrderListComponent } from '../order-list/order-list.component';

@Component({
  selector: 'app-order-manager',
  templateUrl: './order-manager.component.html',
  imports: [OrderListComponent, OrderDetailsComponent]
})
export class OrderManagerComponent {
  orderList = signal<Order[]>(mockApiOrders);
  selectedOrder = signal<Order | undefined>(undefined);

  choose(i: number) {
    this.selectedOrder.set(this.orderList()[i]);
  }
}
