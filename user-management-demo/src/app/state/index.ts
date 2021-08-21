import { ActionReducerMap } from '@ngrx/store';
import { GlobalState } from './global.state';
import { userReducer } from './user.reducer';

export const reducers: ActionReducerMap<GlobalState> = {
  user: userReducer
};
