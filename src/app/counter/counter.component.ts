import { Component, OnInit } from '@angular/core';
import {AppStore} from '../../store/app.store';
import {AppState} from '../../store/app.state';
import {CounterActions} from '../../actions/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  constructor(private store: AppStore, private counterActions: CounterActions) { }

  get state(): AppState {
    return this.store.getState();
  }

  inc(){
    this.store.dispatch(this.counterActions.inc());
  }

  dec(){
    this.store.dispatch(this.counterActions.dec());
  }
}
