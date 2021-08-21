import { Action, createAction, props } from '@ngrx/store';
import { UserParams } from '../models/user-params';
import { UserResponse } from '../models/user-response';

export enum UserActionType {
  Loading = '[User] Loading',
  LoadSuccess = '[User] LoadSuccess',
  LoadFailure = '[User] LoadFailure',
  AddUser = '[User] Add User',
  RemoveUser = '[User] Remove User',
}

export class UserRemoveAction implements Action {
  public readonly type = UserActionType.RemoveUser;
  constructor(public payload: UserParams) {}
}
export class UserAddAction implements Action {
  public readonly type = UserActionType.AddUser;
  constructor(public payload: UserParams) {}
}
export class UserLoadAction implements Action {
  public readonly type = UserActionType.Loading;
  constructor(public payload: UserParams) {}
}

export class UserLoadSuccessAction implements Action {
  public readonly type = UserActionType.LoadSuccess;
  constructor(public payload: UserResponse) {}
}

export class UserLoadFailAction implements Action {
  public readonly type = UserActionType.LoadFailure;
  constructor(public error: any) {}
}

export type UserAction =
  | UserLoadAction
  | UserLoadSuccessAction
  | UserLoadFailAction
  | UserAddAction
  | UserRemoveAction;
