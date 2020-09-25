import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  validateForm!: FormGroup;
  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder, private toastr: ToastrService) {}

  submitForm(form): void {
    // console.log(form.value);
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    this.authService.login(form.value).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        // console.log(res.token);
        this.router.navigateByUrl('/social');
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
    this.validateForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }
}



