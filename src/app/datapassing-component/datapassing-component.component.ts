import {Component, OnInit, Output, Input, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-datapassing-component',
  templateUrl: './datapassing-component.component.html',
  styleUrls: ['./datapassing-component.component.scss']
})
export class DatapassingComponentComponent implements OnInit {
  @Input() numberCount: number = 0;
  @Output() result = new EventEmitter<number>();
  testData:string;
  constructor() {
  }

  ngOnInit() {
    this.testData = "from child"
  }

  increment() {
    this.numberCount++;
    this.result.emit(this.numberCount);
  }

}
