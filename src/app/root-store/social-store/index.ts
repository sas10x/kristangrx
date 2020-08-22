import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  on,
  createReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { Activity } from 'src/app/models/social/activity';
import { loadSocialStoresSuccess, loadSocialStoresFailure } from './social-store.actions';

export const socialStateFeatureKey = 'socialState';

export interface SocialState {  
  activities: Activity[];
  error: any;
}
export const initialState: SocialState = {
  activities: undefined,
  error: undefined
}


export const reducers = createReducer(
  initialState,
  on(loadSocialStoresSuccess, (state, action) => {
    return {
      activities: action.activities
    };
  }),
  on(loadSocialStoresFailure, (state, action) => {
    return {
      activities: state.activities,
      error: action.error
    }
  })
);


export const metaReducers: MetaReducer<SocialState>[] = !environment.production ? [] : [];
