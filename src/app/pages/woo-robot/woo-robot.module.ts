import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WooRobotRoutingModule } from './woo-robot-routing.module';
import { WooListComponent } from './woo-list/woo-list.component';
import { WooLayoutComponent } from './woo-layout/woo-layout.component';

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzAlertModule } from 'ng-zorro-antd/alert';

import { WooReportsComponent } from './woo-reports/woo-reports.component';
import { WooOrdersComponent } from './woo-orders/woo-orders.component';
import { WooCustomersComponent } from './woo-customers/woo-customers.component';
import { WooAnalyticsComponent } from './woo-analytics/woo-analytics.component';
import { WooCreateComponent } from './woo-create/woo-create.component';
import { WooBrandsComponent } from './woo-brands/woo-brands.component';


@NgModule({
  declarations: [WooListComponent, WooLayoutComponent, WooReportsComponent, WooOrdersComponent, WooCustomersComponent, WooAnalyticsComponent, WooCreateComponent, WooBrandsComponent],
  imports: [
    CommonModule,
    WooRobotRoutingModule,
    NzTableModule,
    NzSpinModule,
    NzAlertModule
  ]
})
export class WooRobotModule { }
