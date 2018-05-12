import { Component, OnInit } from '@angular/core';
import * as ca from '@a-actions/counter.actions';
import * as pa from '@a-actions/post.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { getNum } from '@a-redux/selectors/counter.selectors';
import { getPosts } from '@a-redux/selectors/post.selectors';

@Component({
  selector: 'app-comp-second',
  templateUrl: './comp-second.component.html',
  styleUrls: ['./comp-second.component.css']
})
export class CompSecondComponent implements OnInit {
  count$: Observable<number>;
  posts$: Observable<any[]>;

  constructor(private store: Store<any>) {
    this.count$ = store.select(getNum);
    this.posts$ = store.select(getPosts);
  }

  ngOnInit() {
    this.store.dispatch(new pa.LoadPosts());
  }

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
