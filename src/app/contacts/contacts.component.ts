import { Component } from '@angular/core';
import {AppStore} from '../../store/app.store';
import {ContactsActions} from '../../actions/contacts.actions';
import {ContactsState} from '../../store/app.state';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  constructor(private store: AppStore, private contactsActions: ContactsActions) { }

  get state (): ContactsState {
    return this.store.getState().contacts;
  }

  load(){
    this.store.dispatch(this.contactsActions.load());
  }
}
