import { Component } from '@angular/core';

@Component({
  selector: 'app-timer',
  standalone: true,
  template: `
    <p>I was loaded after the timer completed</p>
  `
})
export class TimerComponent {}
