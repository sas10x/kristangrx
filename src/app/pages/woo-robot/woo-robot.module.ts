import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WooRobotRoutingModule } from './woo-robot-routing.module';

import { WooLayoutComponent } from './woo-layout/woo-layout.component';

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

import { WooReportsComponent } from './woo-reports/woo-reports.component';
import { WooOrdersComponent } from './woo-orders/woo-orders.component';
import { WooCustomersComponent } from './woo-customers/woo-customers.component';
import { WooAnalyticsComponent } from './woo-analytics/woo-analytics.component';
import { WooCreateComponent } from './woo-create/woo-create.component';
import { WooBrandsComponent } from './woo-brands/woo-brands.component';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { WooUpdateComponent } from './woo-update/woo-update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AuthStoreModule } from 'src/app/root-store/auth-store/auth-store.module';

import { CardComponent } from './woo-reports-charts/card/card.component';
import { BarComponent } from './woo-reports-charts/bar/bar.component';



import { NgxChartsModule } from '@swimlane/ngx-charts';

import { ComboWantwoComponent } from './woo-reports-charts/combo-wantwo/combo-wantwo.component';

import { ComboChartComponent } from './woo-reports-charts/combo-chart/combo-chart.component';
import { ComboSeriesVerticalComponent } from './woo-reports-charts/combo-chart/combo-series-vertical.component';
import { NumberCardComponent } from './woo-reports-charts/number-card/number-card.component';
import { GaugeComponent } from './woo-reports-charts/gauge/gauge.component';
import { SparklineComponent } from './woo-reports-charts/sparkline/sparkline.component';
import { TimelineFilterBarComponent } from './woo-reports-charts/timeline-filter-bar/timeline-filter-bar.component';
import { LineComponent } from './woo-reports-charts/line/line.component';

@NgModule({
  declarations: [WooUpdateComponent, WooLayoutComponent, WooReportsComponent, WooOrdersComponent, WooCustomersComponent, WooAnalyticsComponent, WooCreateComponent, WooBrandsComponent, CardComponent, BarComponent, ComboWantwoComponent, ComboChartComponent, ComboSeriesVerticalComponent, NumberCardComponent, GaugeComponent, SparklineComponent, TimelineFilterBarComponent, LineComponent],
  imports: [
    NgxChartsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    WooRobotRoutingModule,
    NzTableModule,
    NzSpinModule,
    NzAlertModule,
    NzCheckboxModule,
    NzButtonModule,
    AuthStoreModule,
    NzDatePickerModule
  ]
})
export class WooRobotModule { }
