import {delay} from '../common/timers';
import {Contact} from '../store/app.state';
import {CONTACTS_BEGIN_LOAD, CONTACTS_END_LOAD} from './actions';

export class ContactsActions {
  load() {
    return async (dispatch) => {
      dispatch(this.beginLoad());

      //
      //  Simulate http request that takes 1.5 seconds
      //
      await delay(1500);

      const dataFromServer: Contact[] = [
        {id: 1, name: "Ori"},
        {id: 2, name: "Roni"},
      ];

      dispatch(this.endLoad(dataFromServer));
    };
  }

  private beginLoad() {
    return {
      type: CONTACTS_BEGIN_LOAD,
    };
  }

  private endLoad(contacts: Contact[]) {
    return {
      type: CONTACTS_END_LOAD,
      contacts,
    };
  }
}
