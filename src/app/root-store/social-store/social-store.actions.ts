import { createAction, props } from '@ngrx/store';
import { Activity } from 'src/app/models/social/activity';


export const loadSocialStores = createAction(
  '[SocialStore Feed] Load SocialStores'
);

export const loadSocialStoresSuccess = createAction(
  '[SocialStore Feed] Load SocialStores Success',
  props<{ activities: Activity[] }>()
);

export const loadSocialStoresFailure = createAction(
  '[SocialStore Feed] Load SocialStores Failure',
  props<{ error: any }>()
);
