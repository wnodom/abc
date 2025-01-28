import { Component } from '@angular/core';

@Component({
  selector: 'app-prefetched',
  standalone: true,
  template: `
    <p>I was prefetched, even though the display was delayed</p>
  `
})
export class PrefectchedComponent {}
