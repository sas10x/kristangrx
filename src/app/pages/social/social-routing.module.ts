import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SocialFeedComponent } from './social-feed/social-feed.component';
import { SocialLayoutComponent } from './social-layout/social-layout.component';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { SocialCreateComponent } from './social-create/social-create.component';
import { SocialDetailComponent } from './social-detail/social-detail.component';
import { SocialProfileComponent } from './social-profile/social-profile.component';
import { SocialModalComponent } from './social-modal/social-modal.component';



const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'social'
  },
  {
    path: 'social',
    component: SocialLayoutComponent,
    canActivate:[AuthGuard],
    children: [
      { path: '', component: SocialFeedComponent },
      { path: 'profile', component: SocialProfileComponent},
      { path: 'profile/:id', component: SocialModalComponent }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialRoutingModule { }
