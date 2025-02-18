import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './layout/home/home.component';
import { ProfileComponent } from './layout/profile/profile.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth'
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'woo',
    // canActivate:[AuthGuard],
    loadChildren: () => import('./pages/woo-robot/woo-robot.module').then(m => m.WooRobotModule)
  },
  {
    path: 'social',
    canActivate:[AuthGuard],
    loadChildren: () => import('./pages/social/social.module').then(m => m.SocialModule)
  },
  {
    path: 'inventory',
    loadChildren: () => import('./pages/inventory/inventory.module').then(m => m.InventoryModule)
  },
  {
    path: 'profile/:id',
    component: ProfileComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  }
  // {path: 'error/:type', component: ErrorPageComponent},
	// {path: '', redirectTo: 'auth', pathMatch: 'full'},
	// {path: '**', redirectTo: 'auth', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
