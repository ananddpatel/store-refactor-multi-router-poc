import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { getPosts } from '../../second/redux/reducers/second.index';

@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.css']
})
export class SecondChildComponent implements OnInit {
  posts$: Observable<any[]>;
  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.posts$ = this.store.select(getPosts);
  }

  loadPosts() {
    this.store.dispatch({ type: '[Post] Load Post' });
  }
}
