import { Component } from '@angular/core';

@Component({
  selector: 'app-when',
  standalone: true,
  template: `
    <p>I was loaded after the condition was met</p>
  `
})
export class WhenComponent {}
