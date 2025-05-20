import {
  Component,
  input,
  booleanAttribute,
  numberAttribute
} from '@angular/core';

@Component({
  selector: 'app-built-in-transforms',
  template: `
    <strong>{{ explanation() }}</strong>
    <br />
    Boolean: {{ booleanValue() }}
    <br />
    Number: {{ numberValue() }}
  `
})
export class BuiltInTransformsComponent {
  explanation = input.required<string>();

  booleanValue = input(false, { transform: booleanAttribute });

  numberValue = input(0, { transform: numberAttribute });
}
