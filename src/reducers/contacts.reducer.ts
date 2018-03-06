import {AppState, Contact, ContactsState} from '../store/app.state';
import {CONTACTS_BEGIN_LOAD, CONTACTS_END_LOAD, COUNTER_DEC, COUNTER_INC} from '../actions/actions';

const handlers = {
  [CONTACTS_BEGIN_LOAD]: beginLoad,
  [CONTACTS_END_LOAD]: endLoad,
};

export function contactsReducer(state: ContactsState = null, action): ContactsState {
  const handler = handlers[action.type];
  if(handler){
    return handler(state, action);
  }

  return state;
}

function beginLoad(state: ContactsState, action): ContactsState {
  return {
    ...state,
    loading: true,
  };
}

function endLoad(state: ContactsState, action): ContactsState {
  console.log("xxx");

  return {
    ...state,
    all: action.contacts,
    loading: false,
  };
}
