import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WooLayoutComponent } from './woo-layout/woo-layout.component';
import { WooReportsComponent } from './woo-reports/woo-reports.component';
import { WooAnalyticsComponent } from './woo-analytics/woo-analytics.component';
import { WooCustomersComponent } from './woo-customers/woo-customers.component';
import { WooOrdersComponent } from './woo-orders/woo-orders.component';
import { WooCreateComponent } from './woo-create/woo-create.component';
import { WooBrandsComponent } from './woo-brands/woo-brands.component';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { WooUpdateComponent } from './woo-update/woo-update.component';
import { ComboWantwoComponent } from './woo-reports-charts/combo-wantwo/combo-wantwo.component';



const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'woo'
  },
  {
    path: 'woo', 
    component: WooLayoutComponent,
    canActivate:[AuthGuard],
    children: [
      { path: '', component: WooUpdateComponent },
      { path: 'create', component: WooCreateComponent },
      { path: 'brands', component: WooBrandsComponent },
      { path: 'reports', component: WooReportsComponent },
      { path: 'orders', component: WooOrdersComponent },
      { path: 'customers', component: WooCustomersComponent },
      { path: 'analytics', component: WooAnalyticsComponent },
      { path: 'combo', component: ComboWantwoComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WooRobotRoutingModule { }
