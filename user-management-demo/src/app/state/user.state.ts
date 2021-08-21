import { UserDataInterface } from './../models/user.model';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface UserState extends EntityState<UserDataInterface> {
  error: boolean;
  loading: boolean;
  total: number;
}

export const userAdapter: EntityAdapter<UserDataInterface> =
  createEntityAdapter<UserDataInterface>({
    selectId: (user: UserDataInterface) => user.Id,
  });

export const initialUserState: UserState = userAdapter.getInitialState({
  error: false,
  loading: true,
  total: 0,
});
