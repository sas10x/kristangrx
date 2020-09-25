import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Comment } from 'src/app/models/social/comment';

export const loadComments = createAction(
  "[Comment List Component] Load Comments",
  props<{ id: string}>()
);

export const loadCommentsSuccess = createAction(
  '[Comments List Effect] Load Comments Success', 
  props<{ comments: Comment[] }>()
);

export const loadCommentsFailure = createAction(
  '[Comments List Effect] Load Comments Failure', 
  props<{ error: any }>()
);

export const addComment = createAction(
  '[Comment Add Component] Add Comment',
  props<{ comment: Comment }>()
);

export const addCommentSuccess = createAction(
  '[Comment Add Effect] Add Comment Success',
  props<{ comment: Comment }>()
);

export const addCommentFailure = createAction(
  "[Comment Add Effect] Add Comment Failure",
  props<{ error: any }>()
);

// update
// comment
export const updateComment = createAction(
  '[Comment/API] Update Comment',
  props<{ comment: Update<Comment> }>()
);

// delete
// comment

export const deleteComment = createAction(
  '[Comment/API] Delete Comment',
  props<{ id: string }>()
);

// other
// comments
export const upsertComment = createAction(
  '[Comment/API] Upsert Comment',
  props<{ comment: Comment }>()
);

export const addComments = createAction(
  '[Comment/API] Add Comments',
  props<{ comments: Comment[] }>()
);

export const upsertComments = createAction(
  '[Comment/API] Upsert Comments',
  props<{ comments: Comment[] }>()
);

export const updateComments = createAction(
  '[Comment/API] Update Comments',
  props<{ comments: Update<Comment>[] }>()
);

export const deleteComments = createAction(
  '[Comment/API] Delete Comments',
  props<{ ids: string[] }>()
);

export const clearComments = createAction(
  '[Comment/API] Clear Comments'
);
