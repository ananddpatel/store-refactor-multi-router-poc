import { Component, OnInit } from '@angular/core';
import * as ca from '../../first/redux/actions/counter.actions';
import { getNum } from '../../first/redux/reducers/first.index';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-comp-second',
  templateUrl: './comp-second.component.html',
  styleUrls: ['./comp-second.component.css']
})
export class CompSecondComponent implements OnInit {
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
