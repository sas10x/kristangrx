import { Action, createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';
import { User } from 'src/app/models/auth/user';

export const authsFeatureKey = 'auths';

// export interface State extends EntityState<Auth> {
//   user: User | null;
//   // additional entities state properties
// }
export interface UserState {
  user: User | null;
}


// export const initialState: State = adapter.getInitialState({
//   user: null,
//   // additional entity state properties
// });
export const initialState: UserState = {
  user: null,
};

export const reducer = createReducer(
  initialState,
  on(AuthActions.loginSuccess, (state, { user }) => ({ ...state, user })),
  on(AuthActions.logout, () => initialState)
);


export const getUser = (state: UserState) => state.user;
