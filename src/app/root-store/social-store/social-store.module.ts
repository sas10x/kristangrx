import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromSocialState from './';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromSocialState.socialStateFeatureKey, fromSocialState.reducers, { metaReducers: fromSocialState.metaReducers })
  ]
})
export class SocialStoreModule { }
