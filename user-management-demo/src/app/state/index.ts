import { ActionReducerMap } from '@ngrx/store';
import { GlobalState } from './global.state';
import { userReducer } from './user.reducer';

export const reducer: ActionReducerMap<GlobalState> = {
  user: userReducer
};
