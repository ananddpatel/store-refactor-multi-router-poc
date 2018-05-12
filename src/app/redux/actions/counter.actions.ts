import { Action } from '@ngrx/store';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export class Increment implements Action {
  readonly type = INCREMENT;
  constructor(public by: number = 1) {}
}

export class Decrement implements Action {
  readonly type = DECREMENT;
  constructor(public by: number = 1) {}
}

export class Reset implements Action {
  readonly type = RESET;
}

export type Actions = Increment | Decrement | Reset;
