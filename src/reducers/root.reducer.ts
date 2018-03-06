import { combineReducers } from 'redux'
import {AppState} from '../store/app.state';
import {counterReducer} from './counter.reducer';
import {contactsReducer} from './contacts.reducer';

export const rootReducer = combineReducers({
  counter: counterReducer,
  contacts: contactsReducer,
});
