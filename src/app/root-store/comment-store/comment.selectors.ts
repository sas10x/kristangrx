import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CommentState, commentsFeatureKey, selectAll } from './comment.reducer';

export const selectCommentState = createFeatureSelector<CommentState>(
    commentsFeatureKey
);

export const selectComments = createSelector(selectCommentState, selectAll);