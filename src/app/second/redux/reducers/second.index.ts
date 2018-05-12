import * as posts from '@a-reducers/post.reducer';
import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

export interface State {
  posts: posts.State;
}

export const reducers: ActionReducerMap<State> = {
  posts: posts.reducer
};

export const getPostsStateSelector = createFeatureSelector<State>('posts');
export const getPostsState = createSelector(
  getPostsStateSelector,
  (state: State) => state.posts
);
export const getPosts = createSelector(getPostsState, posts.getPosts);
export const getPostsLoading = createSelector(getPostsState, posts.getLoading);
