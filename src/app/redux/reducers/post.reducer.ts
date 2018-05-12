import { Action } from '@ngrx/store';
import { createSelector } from '@ngrx/store';
import * as pa from '@a-actions/post.actions';

export interface State {
  posts: Array<any>;
  loading: boolean;
}

export const initialState: State = {
  posts: [],
  loading: false
};

export function postReducer(
  state: State = initialState,
  action: pa.Actions
): State {
  switch (action.type) {
    case pa.LOAD_POSTS:
      return {
        ...state,
        loading: true
      };
    case pa.LOAD_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload
      };
    default:
      return state;
  }
}

/*
    Below are the selectors for this reducer. Make sure to make compact selectors as per
    requirements of your application.
*/

export const getPosts = (state: State) => state.posts;
export const getLoading = (state: State) => state.loading;
