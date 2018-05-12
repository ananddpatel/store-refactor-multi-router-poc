import { storeFreeze } from 'ngrx-store-freeze';
import { MetaReducer, ActionReducerMap } from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as S from './all-states';
import { counterReducer } from '@a-reducers/counter.reducer';
import { postReducer } from '@a-reducers/post.reducer';

export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [storeFreeze]
  : [];

export const counterReducers: ActionReducerMap<S.CounterState> = {
  counter: counterReducer
};

export const postReducers: ActionReducerMap<S.PostsState> = {
  posts: postReducer
};
