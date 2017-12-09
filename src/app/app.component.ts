import {Component} from '@angular/core';
import {BroadCaster} from "./broadCaster";

@Component({
  selector: 'myApp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [BroadCaster]
})
export class AppComponent {
  count: number;

  constructor() {
    this.count = 0;
  }

  onChange(val: number) {
    this.count = val;
  }
}
