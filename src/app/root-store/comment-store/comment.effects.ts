import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, tap, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import * as fromCommentActions from './comment.actions';
import { CommentService } from 'src/app/services/social/comment.service';
import { MessageService } from 'src/app/services/social/message.service';



@Injectable()
export class CommentEffects {
   // loadActivity$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(fromActivityActions.loadActivity),
  //     mergeMap(action =>
  //       this.activitiesService.getaActivity(action.id).pipe(
  //         map(activity =>
  //           fromActivityActions.loadActivitySuccess({ selectedActivity: activity })
  //         ),
  //         catchError(error =>
  //           of(fromActivityActions.loadActivityFailure({ error }))
  //         )
  //       )
  //     )
  //   )
  // );

  loadComments$ = createEffect(() => this.actions$.pipe(
    ofType(fromCommentActions.loadComments),
    mergeMap(action => this.commentsService.getComments(action.id)
      .pipe(
        map(comments => fromCommentActions.loadCommentsSuccess({ comments })),
        catchError(error => of(fromCommentActions.loadCommentsFailure({ error })))
      ))
    )
  );

  createComment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromCommentActions.addComment),
      mergeMap(action =>
        this.commentsService.createComment(action.comment).pipe(
          map(comment => fromCommentActions.addCommentSuccess({ comment })),
          catchError(error =>
            of(fromCommentActions.addCommentFailure({ error }))
          )
        )
      )
    )
  );

 

  receiveComment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromCommentActions.addComment),
      mergeMap(action =>
        this.commentsService.createComment(action.comment).pipe(
          map(comment => fromCommentActions.addCommentSuccess({ comment })),
          catchError(error =>
            of(fromCommentActions.addCommentFailure({ error }))
          )
        )
      )
    )
  );

  constructor(private actions$: Actions, private commentsService: CommentService, private router: Router,private chatService: MessageService) {}

}
