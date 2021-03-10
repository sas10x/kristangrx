import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovementComponent } from './movement/movement.component';
import { PriceComponent } from './price/price.component';
import { PrimeComponent } from './prime/prime.component';
import { ProductsComponent } from './products/products.component';
import { StocksComponent } from './stocks/stocks.component';
import { UploadZva05nComponent } from './upload-zva05n/upload-zva05n.component';
import { XampleComponent } from './xample/xample.component';


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
  },
  {
    path: 'prime',
    component: PrimeComponent,
  },
  {
    path: 'product',
    component: ProductsComponent,
  },
  {
    path: 'stock',
    component: StocksComponent,
  },
  {
    path: 'xample',
    component: XampleComponent,
  },
  {
    path: 'zva05n',
    component: UploadZva05nComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
