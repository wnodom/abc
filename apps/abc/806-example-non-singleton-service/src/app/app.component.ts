import { Component } from '@angular/core';

import { CarOrderComponent } from './car-order/car-order.component';

// import { CarStateService } from './car-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  // ,providers: [CarStateService]
  imports: [CarOrderComponent]
})
export class AppComponent {
  cars: { id: number }[] = [];

  addOne() {
    this.cars.push({ id: this.cars.length + 1 });
  }
}
