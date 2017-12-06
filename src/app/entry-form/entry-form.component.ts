import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms'
import {UserListComponent} from '../user-list/user-list.component';
import {BroadCaster} from "../broadCaster";
@Component({
    selector: 'myApp-entry-form',
    templateUrl: './entry-form.component.html',
    styleUrls: ['./entry-form.component.scss']
})
export class EntryFormComponent implements OnInit {
    entryForm: FormGroup;
    @ViewChild('child') chile: UserListComponent;

    constructor(fb: FormBuilder, private broadCaster: BroadCaster) {
        this.entryForm = fb.group({
            _id: [null],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required]
        }, {validator: this.passwordConfirming})
    }

    ngOnInit() {
        this.registerTypeBroadcast();
    }

    /**password mismatch validations*/
    passwordConfirming(c: AbstractControl): {invalid: boolean} {
        if (c.get('password').value !== c.get('confirmPassword').value) {
            return {invalid: true};
        }
    }

    /**save entry*/
    saveEntry(data: Object) {
        this.chile.ngOnChange(data);
        this.entryForm.reset();
    }

    /**pass data to form*/
    editUser(event: any) {
        this.entryForm.setValue({
            _id: event._id,
            firstName: event.firstName,
            lastName: event.lastName,
            email: event.email,
            password: event.password,
            confirmPassword: event.password
        });
    }

    registerTypeBroadcast() {
        this.broadCaster.on<any>('myEvent')
            .subscribe(data => {
                this.editUser(data);
            });
    }
}
