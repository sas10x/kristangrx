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
import { ActivityStoreModule } from 'src/app/root-store/activity-store/activity-store.module';
import { SocialDetailComponent } from './social-detail/social-detail.component';
import { SocialProfileComponent } from './social-profile/social-profile.component';
import { SocialModalComponent } from './social-modal/social-modal.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [SocialLayoutComponent, SocialFeedComponent, SocialCreateComponent, SocialDetailComponent, SocialProfileComponent, SocialModalComponent],
  imports: [
    NgbModule,
    ActivityStoreModule,
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
