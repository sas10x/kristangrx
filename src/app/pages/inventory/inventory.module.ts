import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { PriceComponent } from './price/price.component';
import { HPieComponent } from './h-pie/h-pie.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HNumberComponent } from './h-number/h-number.component';
import { MovementComponent } from './movement/movement.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSpinModule } from 'ng-zorro-antd/spin';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HAdvpieComponent } from './h-advpie/h-advpie.component';
import { HBarComponent } from './h-bar/h-bar.component';
import { HPieGridComponent } from './h-pie-grid/h-pie-grid.component';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzInputModule } from 'ng-zorro-antd/input';
import { PrimeComponent } from './prime/prime.component';

import {TableModule} from 'primeng/table';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {DialogModule} from 'primeng/dialog';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {InputTextModule} from 'primeng/inputtext';
import {ProgressBarModule} from 'primeng/progressbar';
import {DropdownModule} from 'primeng/dropdown';
import { ProductsComponent } from './products/products.component';
import { StocksComponent } from './stocks/stocks.component';
import { SalesComponent } from './sales/sales.component';
import { XampleComponent } from './xample/xample.component';
import { UploadZva05nComponent } from './upload-zva05n/upload-zva05n.component';
import { UploadMb51Component } from './upload-mb51/upload-mb51.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';

import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { HLineComponent } from './h-line/h-line.component';
import { KAnalyticsComponent } from './k-analytics/k-analytics.component';
import { KNumberComponent } from './k-number/k-number.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';


@NgModule({
  declarations: [PriceComponent, HPieComponent, HNumberComponent, MovementComponent, HAdvpieComponent, HBarComponent, HPieGridComponent, PrimeComponent, ProductsComponent, StocksComponent, SalesComponent, XampleComponent, UploadZva05nComponent, UploadMb51Component, HLineComponent, KAnalyticsComponent, KNumberComponent],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    NgxChartsModule,
    NzTableModule,
    NzSpinModule,
    FormsModule,
    ReactiveFormsModule,
    NzAutocompleteModule,
    NzInputModule,
    TableModule,
    CalendarModule,
    SliderModule,
    DialogModule,
    MultiSelectModule,
    ContextMenuModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    ProgressBarModule,
    DropdownModule,
    NzTimelineModule,
    NzDividerModule,
    NzTagModule,
    NzIconModule,
    NzButtonModule,
    NzDatePickerModule,
    NzDropDownModule
  ]
})
export class InventoryModule { }
