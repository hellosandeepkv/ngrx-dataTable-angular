import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import {
  UserActionType,
  UserLoadAction,
  UserLoadSuccessAction,
  UserLoadFailAction,
} from '../state/user.actions';
import { UserParams } from '../models/user-params';
import { UserResponse } from '../models/user-response';
import { UserService } from '../service/user.service';

@Injectable()
export class UserEffects {
  constructor(private service: UserService, private actions$: Actions) {}

  @Effect()
  public loadUsers$ = this.actions$.pipe(
    ofType<UserLoadAction>(UserActionType.Loading),
    map((action) => action.payload),
    switchMap((params: UserParams) =>
      this.service.getUsers(params).pipe(
        map((response: UserResponse) => new UserLoadSuccessAction(response)),
        catchError((error) => of(new UserLoadFailAction(error)))
      )
    )
  );
}
