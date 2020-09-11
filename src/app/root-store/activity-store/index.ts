import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  createReducer,
  on,
  Action
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { Activity } from 'src/app/models/social/activity';
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";0

import * as ActivityActions from './activity.actions';
export const activityStateFeatureKey = 'activityState';

// export interface State extends fromRoot.State {
//   [booksFeatureKey]: BooksState;
// }
export interface ActivityState extends EntityState<Activity>{
  error: any;
  selectedActivity: Activity;
}

export const adapter: EntityAdapter<Activity> = createEntityAdapter<Activity>();
// export interface ActivityState {
//   activities: Activity[];
//   error: any;
// }
export const initialState = adapter.getInitialState({
  error: undefined,
  selectedActivity: undefined
});
// export const reducers = createReducer(
//   initialState,
//   on(loadActivitiesSuccess, (state, action) => {
//     return {
//       activities: action.activities
//     };
//   }),
//   on(loadActivitiesFailure, (state, action) => {
//     return {
//       activities: state.activities,
//       error: action.error
//     }
//   })
// )
export const reducers = createReducer(
  initialState,
  on(ActivityActions.addActivitySuccess, (state, action) => {
  return adapter.addOne(action.activity, state)
  }),
  on(ActivityActions.addActivityFailure, (state, action) => {
  return {
    ...state,
    error: action.error
    };
  }),
  on(ActivityActions.loadActivitiesSuccess, (state, action) => {
    return adapter.addAll(action.activities, state);
  }),
  on(ActivityActions.loadActivitiesFailure, (state, action) => {
    return {
      ...state,
      error: action.error
    };
  }),
  on(ActivityActions.loadActivitySuccess, (state, action) => {
    return {
      ...state,
      selectedActivity: action.selectedActivity
    };
  }),
  on(ActivityActions.loadActivityFailure, (state, action) => {
    return {
      ...state,
      error: action.error
    };
  }),
  // on(ActivityActions.addActivitySuccess, (state, action) => {
  //   return adapter.addOne(action.activity, state)
  //   }),
  on(ActivityActions.updateActivity, (state, action) =>
    adapter.updateOne(action.activity, state)
  ),
  on(ActivityActions.deleteActivitySuccess, (state, action) =>
    adapter.removeOne(action.id, state)
  ),
  on(ActivityActions.deleteActivityFailure, (state, action) => {
    return {
      ...state,
      error: action.error
    };
  })
);
// export const selectBooksState = createFeatureSelector<State, BooksState>(
//   booksFeatureKey
// );
// export const selectBookEntitiesState = createSelector(
//   selectBooksState,
//   (state) => state.books
// );
// export const selectSelectedBookId = createSelector(
//   selectBookEntitiesState,
//   fromBooks.selectId
// );

export const selectActivitiesFeature = createFeatureSelector<ActivityState>(activityStateFeatureKey);

export const selectActivities= createSelector(
  selectActivitiesFeature,
  adapter.getSelectors().selectAll
);

export const selectedActivity= createSelector(
  selectActivitiesFeature,
  (state: ActivityState) => state.selectedActivity
);
export const selectError= createSelector(
  selectActivitiesFeature,
  (state: ActivityState) => state.error
);

export const metaReducers: MetaReducer<ActivityState>[] = !environment.production ? [] : [];
