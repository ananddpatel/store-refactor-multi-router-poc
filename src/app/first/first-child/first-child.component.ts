import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as ca from '../redux/actions/counter.actions';
import { getCounterStateSelector, getNum } from '../redux/reducers/first.index';

@Component({
  selector: 'app-first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.css']
})
export class FirstChildComponent implements OnInit {
  count$: Observable<number>;

  constructor(private store: Store<any>) {
    this.count$ = store.select(getNum);
    this.count$ = store.select(getNum);
  }

  ngOnInit() {}

  increment() {
    this.store.dispatch(new ca.Increment(1));
  }

  decrement() {
    this.store.dispatch(new ca.Decrement(1));
  }

  reset() {
    this.store.dispatch(new ca.Reset());
  }
}
