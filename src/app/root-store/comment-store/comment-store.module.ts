import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromComment from './comment.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CommentEffects } from './comment.effects';





@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromComment.commentsFeatureKey, fromComment.reducer),
    EffectsModule.forFeature([CommentEffects])
  ]
})
export class CommentStoreModule { }
