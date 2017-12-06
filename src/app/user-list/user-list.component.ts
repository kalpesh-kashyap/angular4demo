import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'myApp-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
    usersArr = [];
    @Output() onUserEdit = new EventEmitter<any>();

    constructor() {
    }
    ngOnInit() {
        this.usersArr = [{firstName: 'test', lastName: 'test123', email: 'test@test.com', password: 123456}]
    }
    ngOnChange(event: any) {
        if (event._id != null)
            this.usersArr[event._id] = event;
        else
            this.usersArr.push(event);
    }
    sendUserData(data, i) {
        data._id = i;
        this.onUserEdit.emit(data);
    }
    deleteUser(i: number) {
        this.usersArr.splice(i, 1);
    }
}
