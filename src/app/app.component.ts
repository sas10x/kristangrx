import { Component, NgZone, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { UserState, selectUser } from './root-store/auth-store/auth.reducer';

import * as fromAuthActions from '../app/root-store/auth-store/auth.actions';
import { loginSuccess } from '../app/root-store/auth-store/auth.actions';
import { User } from './models/auth/user';
import { ChangeDetectionStrategy } from '@angular/compiler/src/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public href: string = "";
  user$: Observable<User>;
  title = 'kristangrx';
  user: User;
  loading = true;

  constructor(private userStore: Store<UserState>, private router: Router ){
    console.log(window.location.href);
    localStorage.setItem('url', window.location.href);

        // const userProfile = localStorage.getItem("user");
        // if (userProfile) {
        //     // this.userStore.dispatch(loginSuccess({user: JSON.parse(userProfile)}));
        //     this.userStore.dispatch(fromAuthActions.loginSuccess({ user: JSON.parse(userProfile) }));
        // }
      //   this.router.events.subscribe(event => {
      //     switch (true) {
      //         case event instanceof NavigationStart: {
      //             this.loading = true;
      //             break;
      //         }

      //         case event instanceof NavigationEnd:
      //         case event instanceof NavigationCancel:
      //         case event instanceof NavigationError: {
      //             this.loading = false;
      //             break;
      //         }
      //         default: {
      //             break;
      //         }
      //     }
      //   this.user$ = this.userStore.pipe(select(selectUser));
      // });
  };
  ngOnInit() {
    // this.authenticate();
  }
  authenticate() {
    const userProfile = localStorage.getItem("user");
        if (userProfile) {
            // this.userStore.dispatch(loginSuccess({user: JSON.parse(userProfile)}));
            this.userStore.dispatch(fromAuthActions.loginSuccess({ user: JSON.parse(userProfile) }));
        }
  }
}
