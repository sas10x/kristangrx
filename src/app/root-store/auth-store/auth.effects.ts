import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromAuthActions from './auth.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { User } from 'src/app/models/auth/user';
import { of } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';



@Injectable()
export class AuthEffects {

  login$ = this.actions$.pipe(
    ofType(fromAuthActions.login),
    mergeMap(action => this.authService.login(action.authenticate)
        .pipe(
          map(user => fromAuthActions.loginSuccess({ user })),
          catchError(error => of(fromAuthActions.loginFailure(error)))
        )
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) {}

}
