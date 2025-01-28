import { Component } from '@angular/core';

@Component({
  selector: 'app-idle',
  standalone: true,
  template: `
    <p>I was loaded when the browser was idle</p>
  `
})
export class IdleComponent {}
