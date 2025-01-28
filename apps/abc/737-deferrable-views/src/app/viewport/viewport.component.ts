import { Component } from '@angular/core';

@Component({
  selector: 'app-viewport',
  standalone: true,
  template: `
    <p>I was loaded when I was scrolled into the viewport</p>
  `
})
export class ViewportComponent {}
