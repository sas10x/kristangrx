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

@NgModule({
  declarations: [PriceComponent, HPieComponent, HNumberComponent, MovementComponent, HAdvpieComponent, HBarComponent, HPieGridComponent, PrimeComponent],
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
    DropdownModule
  ]
})
export class InventoryModule { }
