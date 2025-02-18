import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ToastrModule } from 'ngx-toastr';
import { AuthStoreModule } from '../root-store/auth-store/auth-store.module';
import { ProfileDropdownComponent } from './profile-dropdown/profile-dropdown.component';



@NgModule({
  declarations: [LoginComponent, ProfileDropdownComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    AuthStoreModule,
    NzFormModule,
    NzInputModule,
    FormsModule,
    ReactiveFormsModule,
    NzButtonModule,
    ToastrModule.forRoot()
  ]
})
export class AuthModule { }
