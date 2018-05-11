import * as ca from '../actions/counter.actions';

export interface State {
  name: string;
  num: number;
}

const initialState = {
  name: 'state-in-first-module',
  num: 0
};

export function counterReducer(
  state: State = initialState,
  action: ca.Actions
) {
  switch (action.type) {
    case ca.INCREMENT:
      return { ...state, num: state.num + action.by };

    case ca.DECREMENT:
      return { ...state, num: state.num - action.by };

    case ca.RESET:
      return { ...state, num: 0 };

    default:
      return state;
  }
}

export const getNum = (state: State) => state.num;
