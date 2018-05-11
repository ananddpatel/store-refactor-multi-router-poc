import { Action } from '@ngrx/store';

export const LOAD_POSTS = '[Post] Load Post';
export const LOAD_POSTS_SUCCESS = '[Post] Load Post Success';

export class LoadPosts implements Action {
  readonly type = LOAD_POSTS;
}

export class LoadPostsSuccess implements Action {
  readonly type = LOAD_POSTS_SUCCESS;
  constructor(public payload: any[]) {}
}

export type Actions = LoadPosts | LoadPostsSuccess;
