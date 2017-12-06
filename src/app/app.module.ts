import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AngularDualListBoxModule } from 'angular-dual-listbox';
import {AppComponent} from './app.component';
import {EntryFormComponent} from './entry-form/entry-form.component';
import {UserListComponent} from './user-list/user-list.component';
import { MovingListBoxComponent } from './moving-list-box/moving-list-box.component';
import { BroadCastTestComponent } from './broad-cast-test/broad-cast-test.component';


@NgModule({
  declarations: [
    AppComponent,
    EntryFormComponent,
    UserListComponent,
    MovingListBoxComponent,
    BroadCastTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularDualListBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
