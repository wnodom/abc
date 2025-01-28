import { Component, Input, inject } from '@angular/core';
import {
  FormArray,
  FormControl,
  NonNullableFormBuilder,
  ReactiveFormsModule
} from '@angular/forms';

@Component({
  selector: 'app-form-toppings',
  templateUrl: './form-toppings.component.html',
  styleUrl: './form-toppings.component.scss',
  imports: [ReactiveFormsModule]
})
export class FormToppingsComponent {
  private fb = inject(NonNullableFormBuilder);

  @Input({ required: true }) toppings!: FormArray<
    FormControl<string>
  >;

  get toppingControls() {
    return (this.toppings.controls ?? []) as FormControl[];
  }

  addNewTopping() {
    this.toppings.push(this.fb.control(''));
  }

  removeTopping(toppingIndex: number) {
    this.toppings.removeAt(toppingIndex);
  }
}
