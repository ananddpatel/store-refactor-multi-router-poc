import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as posts from '@a-reducers/post.reducer';
import { PostsState } from '@a-redux/all-states';

export const getPostsStateSelector = createFeatureSelector<PostsState>('posts');
export const getPostsState = createSelector(
  getPostsStateSelector,
  (state: PostsState) => state.posts
);
export const getPosts = createSelector(getPostsState, posts.getPosts);
export const getPostsLoading = createSelector(getPostsState, posts.getLoading);
