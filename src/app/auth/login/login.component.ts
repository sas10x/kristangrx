import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Store, select } from '@ngrx/store';
import { UserState, selectUser } from 'src/app/root-store/auth-store/auth.reducer';
import { loadActivity } from 'src/app/root-store/activity-store/activity.actions';
import { Authenticate } from 'src/app/models/auth/authenticate';
import { login, loginSuccess } from 'src/app/root-store/auth-store/auth.actions';
import * as fromAuthActions from '../../root-store/auth-store/auth.actions';
import { User } from 'src/app/models/auth/user';
import { Observable } from 'rxjs';
import { filter, take } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  kristan: {}; 
  user$: Observable<User>;

  validateForm!: FormGroup;
  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder, private toastr: ToastrService, private userStore: Store<UserState>) {}

  submitForm(authenticate): void {
    // console.log(form.value);
    console.log(authenticate);
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    // this.store.dispatch(
    //   login({authenticate})
    // );
    this.authService.login(authenticate).subscribe(
      (user: User) => {
        this.userStore.dispatch(loginSuccess({user}));
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigateByUrl('/social/social');
      },
      err => {
        console.log('ERROR');
        if (err.status == 400 || err.status == 401)
        {
          console.log('toaster');
          this.toastr.error('Incorrect username or password.', 'Authentication failed.');
        }  
        else {
          console.log(err);
        }
      }
    );
  }
  ngOnInit(): void {
    this.authenticate();
    // this.loadUser();
    this.validateForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }
  authenticate() {
    const userProfile = localStorage.getItem("user");
        if (userProfile) {
            // this.userStore.dispatch(loginSuccess({user: JSON.parse(userProfile)}));
            this.userStore.dispatch(fromAuthActions.loginSuccess({ user: JSON.parse(userProfile) }));
        }
  }
  loadUser() {
    this.user$ = this.userStore.pipe(select(selectUser));
  }
}



