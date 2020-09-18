import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as CommentActions from './comment.actions';

export const commentsFeatureKey = 'comments';

import { Comment } from 'src/app/models/social/comment';

export interface CommentState extends EntityState<Comment> {
  // additional entities state properties
  error: any;
}

export const adapter: EntityAdapter<Comment> = createEntityAdapter<Comment>();

export const initialState: CommentState = adapter.getInitialState({
  // additional entity state properties
  error: undefined
});


export const reducer = createReducer(
  initialState,
  on(CommentActions.addCommentSuccess,
    (state, action) => adapter.addOne(action.comment, state)
  ),
  on(CommentActions.addCommentFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error
      }
    }
  ),
  on(CommentActions.loadCommentsSuccess,
    (state, action) => adapter.setAll(action.comments, state)
  ),
  on(CommentActions.loadCommentsFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error
      }
    }
  ),
  on(CommentActions.upsertComment,
    (state, action) => adapter.upsertOne(action.comment, state)
  ),
  on(CommentActions.addComments,
    (state, action) => adapter.addMany(action.comments, state)
  ),
  on(CommentActions.upsertComments,
    (state, action) => adapter.upsertMany(action.comments, state)
  ),
  on(CommentActions.updateComment,
    (state, action) => adapter.updateOne(action.comment, state)
  ),
  on(CommentActions.updateComments,
    (state, action) => adapter.updateMany(action.comments, state)
  ),
  on(CommentActions.deleteComment,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(CommentActions.deleteComments,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
 
  on(CommentActions.clearComments,
    state => adapter.removeAll(state)
  ),
);


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
