import {
  ActionReducerMap,
  MetaReducer,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';
import * as counter from '@a-reducers/counter.reducer';
import { environment } from '../../../../environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';

export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [storeFreeze]
  : [];

export interface State {
  counter: counter.State;
}

export const reducers: ActionReducerMap<State> = {
  counter: counter.counterReducer
};

export const getCounterStateSelector = createFeatureSelector<State>('counter');

export const getCounterState = createSelector(
  getCounterStateSelector,
  (state: State) => state.counter
);
export const getNum = createSelector(getCounterState, counter.getNum);
