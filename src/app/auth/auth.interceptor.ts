import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { Router } from "@angular/router";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private router: Router) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (localStorage.getItem('user') != null) {
            // var user = JSON.parse(localStorage.getItem('user'));
            var user = JSON.parse(localStorage.getItem('user'));
            console.log(user);
            console.log(user.token);
            const clonedReq = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + user.token)
            });
            return next.handle(clonedReq).pipe(
                tap(
                    succ => { },
                    err => {
                        if (err.status == 401){
                            localStorage.removeItem('user');
                            this.router.navigateByUrl('/user/login');
                        }
                        else if(err.status == 403)
                        this.router.navigateByUrl('/forbidden');
                    }
                )
            )
        }
        else
            return next.handle(req.clone());
    }
}