import { Component } from '@angular/core';

import { ManagerComponent } from './manager.component';

@Component({
  selector: 'app-root',
  template: '<app-manager-cmp/>',
  imports: [ManagerComponent]
})
export class AppComponent {}
