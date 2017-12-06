import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'myApp-moving-list-box',
  templateUrl: './moving-list-box.component.html',
  styleUrls: ['./moving-list-box.component.scss']
})
export class MovingListBoxComponent implements OnInit {
  source = [];
  confirmed = [];
  id:string;
  name:string;
  constructor() {
  }

  ngOnInit() {
    this.id = 'id';
    this.name = 'name';
    this.source = [
      {
        "id": 1,
        "name": "Antonito",
        "state": "CO"
      },
      {
        "id": 2,
        "name": "Big Horn",
        "state": "NM"
      },
      {
        "id": 3,
        "name": "Sublette",
        "state": "NM"
      }
    ];
  }

}
