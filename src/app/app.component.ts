import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  title: string = 'easy-counter';
  isStarted: boolean = false;
  count: number = 0;

  updateCount() {
    if(this.count < 0) return;
    this.count = this.count + 1
  }

  startCounter() {
    this.isStarted = true;
  }

  resetCounter() {
    this.count = 0;
    this.isStarted = false;
  }
}
