import {Component, OnInit} from '@angular/core';
import {BroadCaster} from "../broadCaster";

@Component({
    selector: 'myApp-broad-cast-test',
    templateUrl: './broad-cast-test.component.html',
    styleUrls: ['./broad-cast-test.component.scss']
})
export class BroadCastTestComponent implements OnInit {
    userObj = {_id: null, firstName: 'test', lastName: 'test123', email: 'test@test.com', password: 123456};

    constructor(private broadcaster: BroadCaster) {
    }

    emitBroadCast() {
        this.broadcaster.broadCast('myEvent', this.userObj);
    }

    ngOnInit() {
    }

}
