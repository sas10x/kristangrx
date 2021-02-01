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

@NgModule({
  declarations: [PriceComponent, HPieComponent, HNumberComponent, MovementComponent, HAdvpieComponent],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    NgxChartsModule,
    NzTableModule,
    NzSpinModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class InventoryModule { }
