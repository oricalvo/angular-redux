import {COUNTER_DEC, COUNTER_INC} from './actions';

export class CounterActions {
  inc(){
    return {
      type: COUNTER_INC,
    };
  }

  dec(){
    return {
      type: COUNTER_DEC,
    };
  }
}
