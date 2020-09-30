import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';
import { Store, select } from '@ngrx/store';
import { UserState, selectUser } from '../root-store/auth-store/auth.reducer';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(private router: Router,private authService : AuthService, private store: Store<UserState>) {
  }
  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean> {

  //   if (localStorage.getItem('token') != null){
  //     let roles = next.data['permittedRoles'] as Array<string>;
  //     if(roles){
  //       if(this.authService.roleMatch(roles)) return true;
  //       else{
  //         this.router.navigate(['/forbidden']);
  //         return false;
  //       }
  //     }
  //     return true;
  //   }
  //   else {
  //     this.router.navigate(['/admin/login']);
  //     return false;
  //   }
  // }
  // }
  canActivate(
    next: ActivatedRouteSnapshot,
    routerState: RouterStateSnapshot
  ): Observable<boolean> {
    return this.store.pipe(select(selectUser),
      map(user => {
        if (user) {
          let roles = next.data['permittedRoles'] as Array<string>;
          if(roles){
                  if(this.authService.roleMatch(roles)) return true;
                  else{
                    this.router.navigate(['/forbidden']);
                    return false;
                  }
                }
          return true;
        } else {
          this.router.navigate([`/admin/login`]);
          return false;
        }
      })
    );
  }
}