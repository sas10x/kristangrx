import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SocialFeedComponent } from './social-feed/social-feed.component';
import { SocialLayoutComponent } from './social-layout/social-layout.component';
import { AuthGuard } from 'src/app/auth/auth.guard';



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
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialRoutingModule { }
