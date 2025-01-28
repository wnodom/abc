import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { updateSimulation } from './silicon-wafers.animations';

@Component({
  selector: 'app-wafers-component',
  templateUrl: './silicon-wafers.component.html',
  styleUrl: './silicon-wafers.component.scss',
  animations: [updateSimulation],
  imports: [ReactiveFormsModule]
})
export default class SiliconWafersComponent {
  etchDepth = new FormControl(50, { nonNullable: true });
  etchTime = new FormControl(3, { nonNullable: true });
}
