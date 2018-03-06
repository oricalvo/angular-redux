import {createStore, Dispatch, Reducer, Unsubscribe, applyMiddleware} from 'redux';
import {AppState} from './app.state';
import {rootReducer} from '../reducers/root.reducer';
import thunk from 'redux-thunk';

const initialState: AppState = {
  contacts: {
    all: null,
    loading: false,
  },
  counter: 10,
};

export abstract class AppStore {
  dispatch: Dispatch<AppState>;

  abstract getState(): AppState;
  abstract subscribe(listener: () => void): Unsubscribe;
  abstract replaceReducer(nextReducer: Reducer<AppState>): void;
}

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export const STORE_PROVIDER = {provide: AppStore, useValue: store};
