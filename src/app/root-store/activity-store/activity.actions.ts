import { createAction, props } from '@ngrx/store';
import { Activity } from 'src/app/models/social/activity';
import { Update } from '@ngrx/entity';

// Load List activities
export const loadActivities = createAction(
  "[Activity List Component] Load Activities"
);
export const loadActivitiesSuccess = createAction(
  "[Activity List Effect] Load Activities Success",
  props<{ activities: Activity[] }>()
);
export const loadActivitiesFailure = createAction(
  "[Activity List Effect] Load Activities Failure",
  props<{ error: any }>()
);
// Load Activity
export const loadActivity = createAction(
  "[Activity Components] Load Activity",
  props<{ id: string }>()
);
export const loadActivitySuccess = createAction(
  "[Activity Effect] Load Activity Success",
  props<{ selectedActivity: Activity }>()
);
export const loadActivityFailure = createAction(
  "[Activity Effect] Load Activity Failure",
  props<{ error: any }>()
);
// Add Activity
export const addActivity = createAction(
  "[Activity Add Component] Add Activity",
  props<{ activity: Activity }>()
);

export const addActivitySuccess = createAction(
  "[Activity Add Effect] Add Activity Success",
  props<{ activity: Activity }>()
);

export const addActivityFailure = createAction(
  "[Activity Add Effect] Add Activity Failure",
  props<{ error: any }>()
);

// Edit Component
export const updateActivity = createAction(
  "[Activity Edit Component] Update Activity",
  props<{ activity: Update<Activity> }>()
);
//Delete Activity

export const deleteActivity = createAction(
  "[Activity Components] Delete Activity",
  props<{ id: string }>()
);

export const deleteActivitySuccess = createAction(
  "[Activity Delete Effect] Delete Activity Success",
  props<{ id: string }>()
);

export const deleteActivityFailure = createAction(
  "[Activity Delete Effect] Delete Activity Failure",
  props<{ error: any }>()
);