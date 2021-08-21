import { UserAction, UserActionType } from '../state/user.actions';
import { initialUserState, userAdapter, UserState } from '../state/user.state';

export function userReducer(
  state = initialUserState,
  action: UserAction
): UserState {
  switch (action.type) {
    case UserActionType.Loading: {
      return { ...state, loading: true };
    }
    case UserActionType.LoadSuccess: {
      return userAdapter.setAll(action.payload.users, {
        ...state,
        error: false,
        loading: false,
        total: action.payload.total,
      });
    }
    case UserActionType.LoadFailure: {
      return userAdapter.removeAll({
        ...state,
        error: true,
        loading: false,
        total: 0,
      });
    }
    default:
      return state;
  }
}
