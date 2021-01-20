import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SocialFeedComponent } from './social-feed/social-feed.component';
import { SocialLayoutComponent } from './social-layout/social-layout.component';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { SocialCreateComponent } from './social-create/social-create.component';
import { SocialDetailComponent } from './social-detail/social-detail.component';
import { SocialProfileComponent } from './social-profile/social-profile.component';
import { DialogDetailComponent } from './dialog-detail/dialog-detail.component';
import { SocialBlankComponent } from './social-blank/social-blank.component';
import { UploadAppComponent } from './upload-app/upload-app.component';
import { ProfileComponent } from '../../layout/profile/profile.component';



const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'social'
  },
  {
    path: 'social',
    component: SocialLayoutComponent,
    children: [
      { path: '', component: SocialBlankComponent },
      { path: ':id', component: DialogDetailComponent},
    ]
  },
  {
    path: 'upload',
    component: UploadAppComponent,
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialRoutingModule { }
