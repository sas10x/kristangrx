import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovementComponent } from './movement/movement.component';
import { PriceComponent } from './price/price.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'price'
  },
  {
    path: 'price',
    component: PriceComponent,
  },
  {
    path: 'movement',
    component: MovementComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }