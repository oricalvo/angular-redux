import {AppState} from '../store/app.state';
import {COUNTER_DEC, COUNTER_INC} from '../actions/actions';

const handlers = {
  [COUNTER_INC]: inc,
  [COUNTER_DEC]: dec,
};

export function counterReducer(state: number = 0, action){
  const handler = handlers[action.type];
  if(handler){
    return handler(state, action);
  }

  return state;
}

function inc(state: number, action) {
  return state + 1;
}

function dec(state: number, action) {
  return state - 1;
}
