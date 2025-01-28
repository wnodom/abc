import { Component } from '@angular/core';
import {
  FormControl,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [ReactiveFormsModule]
})
export class AppComponent {
  name = new FormControl('', Validators.required);
  outputValue = '';

  setValue() {
    this.name.setValue('Set from code');
  }

  useValue() {
    this.outputValue = 'testing 123 - ' + this.name.value;
  }
}
