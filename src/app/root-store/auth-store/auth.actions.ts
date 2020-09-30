import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { User } from 'src/app/models/auth/user';
import { Authenticate } from 'src/app/models/auth/authenticate';

export const login = createAction(
  '[Auth/API] Login',
  props<{ authenticate: Authenticate }>()
);

export const loginSuccess = createAction(
  '[Auth/API] Login Success',
  props<{ user: User }>()
);

export const loginFailure = createAction(
  '[Auth/API] Login Failure',
  props<{ error: any }>()
);

export const logout = createAction(
  "[Top Menu] Logout"
);