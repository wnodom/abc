import { Component } from '@angular/core';
import {
  RouterLinkActive,
  RouterLink,
  RouterOutlet
} from '@angular/router';

import { routeChange } from './routing.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [routeChange],
  imports: [RouterLinkActive, RouterLink, RouterOutlet]
})
export class AppComponent {}
