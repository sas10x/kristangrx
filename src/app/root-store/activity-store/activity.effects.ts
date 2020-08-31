import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ActivitiesService } from 'src/app/services/social/activities.service';
import { mergeMap, map, catchError, tap, concatMap } from 'rxjs/operators';
import * as fromActivityActions from'./activity.actions';
import { of } from 'rxjs';
import { Router } from '@angular/router';



@Injectable()
export class ActivityEffects {

  loadActivities$ = createEffect(() => this.actions$.pipe(
    ofType(fromActivityActions.loadActivities),
    mergeMap(() => this.activitiesService.getActivities()
      .pipe(
        map(activities => fromActivityActions.loadActivitiesSuccess({ activities })),
        catchError(error => of(fromActivityActions.loadActivitiesFailure({ error })))
      ))
    )
  );

  loadActivity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActivityActions.loadActivity),
      mergeMap(action =>
        this.activitiesService.getaActivity(action.id).pipe(
          map(activity =>
            fromActivityActions.loadActivitySuccess({ selectedActivity: activity })
          ),
          catchError(error =>
            of(fromActivityActions.loadActivityFailure({ error }))
          )
        )
      )
    )
  );

  createActivity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActivityActions.addActivity),
      mergeMap(action =>
        this.activitiesService.createActivity(action.activity).pipe(
          map(activity => fromActivityActions.addActivitySuccess({ activity })),
          catchError(error =>
            of(fromActivityActions.addActivityFailure({ error }))
          )
        )
      ),
      tap(() => this.router.navigate(["/social/social"]))
    )
  );

  updateActivity$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromActivityActions.updateActivity),
        concatMap(action =>
          this.activitiesService.editActivity(
            action.activity.id,
            action.activity.changes
          )
        ),
        tap(() => this.router.navigate(["/social/social"]))
      ),
    { dispatch: false }
  );

  deleteActivity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActivityActions.deleteActivity),
      mergeMap(action =>
        this.activitiesService.deleteActivity(action.id).pipe(
          map(() => fromActivityActions.deleteActivitySuccess({ id: action.id })),
          catchError(error =>
            of(fromActivityActions.deleteActivityFailure({ error }))
          )
        )
      ),
      tap(() => this.router.navigate(["/social/social"]))
    )
  );

  constructor(private actions$: Actions, private activitiesService: ActivitiesService, private router: Router) {}

}
