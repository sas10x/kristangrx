import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddXComponent } from './add-x/add-x.component';
import { KAnalyticsComponent } from './k-analytics/k-analytics.component';
import { MovementComponent } from './movement/movement.component';
import { PriceComponent } from './price/price.component';
import { PrimeComponent } from './prime/prime.component';
import { ProductsComponent } from './products/products.component';
import { StocksComponent } from './stocks/stocks.component';
import { UploadMb51Component } from './upload-mb51/upload-mb51.component';
import { UploadZva05nComponent } from './upload-zva05n/upload-zva05n.component';
import { XampleComponent } from './xample/xample.component';
import { XpacexComponent } from './xpacex/xpacex.component';


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
  },
  {
    path: 'mb51',
    component: UploadMb51Component,
  },
  {
    path: 'analytics',
    component: KAnalyticsComponent,
  },
  {
    path: 'x',
    component: AddXComponent,
  },
  {
    path: 'xpace',
    component: XpacexComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
