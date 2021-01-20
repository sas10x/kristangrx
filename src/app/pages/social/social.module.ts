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

import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzModalModule } from 'ng-zorro-antd/modal';

import { ActivityStoreModule } from 'src/app/root-store/activity-store/activity-store.module';
import { CommentStoreModule } from 'src/app/root-store/comment-store/comment-store.module';

import { SocialDetailComponent } from './social-detail/social-detail.component';
import { SocialProfileComponent } from './social-profile/social-profile.component';
import { DialogDetailComponent } from './dialog-detail/dialog-detail.component';
import { DialogEditComponent } from './dialog-edit/dialog-edit.component';
import { DialogCreateComponent } from './dialog-create/dialog-create.component';
import {MatDialogModule} from '@angular/material/dialog';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';
import { SocialBlankComponent } from './social-blank/social-blank.component';
import { UploadAppComponent } from './upload-app/upload-app.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { AuthStoreModule } from 'src/app/root-store/auth-store/auth-store.module';
import { ProfileComponent } from '../../layout/profile/profile.component';




@NgModule({
  declarations: [SocialLayoutComponent, SocialFeedComponent, SocialCreateComponent, SocialDetailComponent, SocialProfileComponent, DialogDetailComponent, DialogEditComponent, DialogCreateComponent, PhotoDetailComponent, SocialBlankComponent, UploadAppComponent, UploadImageComponent, ProfileComponent],
  imports: [
    NgbModule,
    MatDialogModule,
    CommentStoreModule,
    ActivityStoreModule,
    AuthStoreModule,
    CommonModule,
    SocialRoutingModule,
    NzFormModule,
    NzInputModule,
    FormsModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzModalModule,
    NzDropDownModule
  ]
})
export class SocialModule { }
