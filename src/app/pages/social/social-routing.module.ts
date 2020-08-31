import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SocialFeedComponent } from './social-feed/social-feed.component';
import { SocialLayoutComponent } from './social-layout/social-layout.component';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { SocialCreateComponent } from './social-create/social-create.component';
import { SocialDetailComponent } from './social-detail/social-detail.component';



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
      { path: 'detail', component: SocialDetailComponent },
      { path: 'modal', component: SocialCreateComponent}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialRoutingModule { }
