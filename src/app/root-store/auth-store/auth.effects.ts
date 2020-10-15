import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';
import * as fromAuthActions from './auth.actions';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { User } from 'src/app/models/auth/user';
import { of } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';



@Injectable()
export class AuthEffects {
 
  login$ = createEffect(() => this.actions$.pipe(
    ofType(fromAuthActions.login),
    mergeMap(action => this.authService.login(action.authenticate)
        .pipe(
          map(user => fromAuthActions.loginSuccess({ user })),
          catchError(error => of(fromAuthActions.loginFailure(error)))
        )
      ),
      tap((action) => {
        localStorage.setItem('user', JSON.stringify(action['user']));
        this.router.navigate(["/social/social"]);
      })
    )
  );
  
  loginSuccess$ = createEffect(() =>
  this.actions$
      .pipe(
          ofType(fromAuthActions.loginSuccess),
          tap(action => {
            var url = localStorage.getItem("url");
            console.log(url);
            if (url != 'http://localhost:4200/')
            {
              var res = url.replace("http://localhost:4200/", "");
              this.router.navigateByUrl(`${res}`);
            }
            else {
              this.router.navigateByUrl(`/social/social`);
            }
          })
      )
,
{dispatch: false});


  constructor(private actions$: Actions, private authService: AuthService, private router: Router) {}

}
