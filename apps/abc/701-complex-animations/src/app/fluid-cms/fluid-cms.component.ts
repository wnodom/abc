import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule
} from '@angular/forms';

import { shrinkTextOnUpdate } from './fluid-cms.animations';

@Component({
  selector: 'app-fluid-cms-component',
  templateUrl: './fluid-cms.component.html',
  animations: [shrinkTextOnUpdate],
  styleUrl: './fluid-cms.component.scss',
  imports: [ReactiveFormsModule]
})
export default class CmsFluidComponent {
  sizeAndSpeed = new FormGroup({
    animationSpeed: new FormControl(500),
    size: new FormControl(12)
  });
}
