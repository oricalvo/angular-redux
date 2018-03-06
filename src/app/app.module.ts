import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {STORE_PROVIDER} from '../store/app.store';
import { CounterComponent } from './counter/counter.component';
import {CounterActions} from '../actions/counter.actions';
import { ContactsComponent } from './contacts/contacts.component';
import {ContactsActions} from '../actions/contacts.actions';


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    STORE_PROVIDER,
    CounterActions,
    ContactsActions,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
