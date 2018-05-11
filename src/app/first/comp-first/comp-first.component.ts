import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as ca from '../redux/actions/counter.actions';
import { getNum } from '../redux/reducers/first.index';

@Component({
  selector: 'app-comp-first',
  templateUrl: './comp-first.component.html',
  styleUrls: ['./comp-first.component.css']
})
export class CompFirstComponent implements OnInit {
  count$: Observable<number>;

  constructor(private store: Store<any>) {
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
