import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-select',
  templateUrl: './form-select.component.html',
  imports: [ReactiveFormsModule]
})
export class FormSelectComponent {
  @Input({ required: true }) control!: FormControl<any>;
  @Input({ required: true }) label!: string;
  @Input({ required: true }) options!: string[];
}
