import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromActivityState from './';
import { EffectsModule } from '@ngrx/effects';
import { ActivityEffects } from './activity.effects';
import { ActivitiesService } from 'src/app/services/social/activities.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromActivityState.activityStateFeatureKey, 
      fromActivityState.reducers, 
      { metaReducers: fromActivityState.metaReducers }
      ),
    EffectsModule.forFeature([ActivityEffects])
  ],
  providers: [ActivitiesService],
})
export class ActivityStoreModule { }
