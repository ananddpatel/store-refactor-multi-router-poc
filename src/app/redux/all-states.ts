import { MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';

import * as counter from '@a-reducers/counter.reducer';
import * as post from '@a-reducers/post.reducer';

export interface CounterState {
  counter: counter.State;
}

export interface PostsState {
  posts: post.State;
}
