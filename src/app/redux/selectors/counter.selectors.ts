import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as counter from '@a-reducers/counter.reducer';
import { CounterState } from '@a-redux/all-states';

export const getCounterStateSelector = createFeatureSelector<CounterState>(
  'counter'
);

export const getCounterState = createSelector(
  getCounterStateSelector,
  (state: CounterState) => state.counter
);
export const getNum = createSelector(getCounterState, counter.getNum);
