import { UserState, initialUserState } from './user.state';

export interface GlobalState {
  user: UserState;
}

export const initialGlobalState: GlobalState = {
  user: initialUserState,
};
