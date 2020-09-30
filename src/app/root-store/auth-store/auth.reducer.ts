import { Action, createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';

import { User } from 'src/app/models/auth/user';
import { loginSuccess, loginFailure, logout } from './auth.actions';

export const authsFeatureKey = 'auths';

// export interface State extends EntityState<Auth> {
//   user: User | null;
//   // additional entities state properties
// }
export interface UserState {
  user: User;
  error: any;
}


// export const initialState: State = adapter.getInitialState({
//   user: null,
//   // additional entity state properties
// });
export const initialState: UserState = {
  user: undefined,
  error: undefined
};

export const reducer = createReducer(
  initialState,
  on(loginSuccess, (state, action) => {
    return {
      user: action.user
    };
  }),
  on(loginFailure, (state, action) => {
    return {
      user: state.user,
      error: action.error
    };
  }),
  on(logout, (state, action) => {
    return {
        user: undefined
    }
})
);
export const selectUserFeature = createFeatureSelector<UserState>(authsFeatureKey);
 
export const selectUser = createSelector(
  selectUserFeature,
  (state: UserState) => state.user
);


export const getUser = (state: UserState) => state.user;
