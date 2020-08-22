import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialRoutingModule } from './social-routing.module';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { SocialLayoutComponent } from './social-layout/social-layout.component';
import { SocialFeedComponent } from './social-feed/social-feed.component';
import { SocialCreateComponent } from './social-create/social-create.component';
import { NzModalModule } from 'ng-zorro-antd/modal';


@NgModule({
  declarations: [SocialLayoutComponent, SocialFeedComponent, SocialCreateComponent],
  imports: [
    CommonModule,
    SocialRoutingModule,
    NzFormModule,
    NzInputModule,
    FormsModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzModalModule
  ]
})
export class SocialModule { }
