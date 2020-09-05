import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/woo/order/Order';
import { OrderService } from 'src/app/services/order/order.service';
import { HttpClient } from '@angular/common/http';
import { WooQryService } from 'src/app/providers/woo-qry.service';
import { NzTableQueryParams } from 'ng-zorro-antd/table';

@Component({
  selector: 'app-woo-orders',
  templateUrl: './woo-orders.component.html',
  styleUrls: ['./woo-orders.component.scss']
})
export class WooOrdersComponent implements OnInit {
  loading = true;
  pageSize = 10;
  pageIndex = 1;
  total : number = 1;
  orders: Order[];
  filterStatus = [
    { text: 'any', value: 'any' },
    { text: 'pending', value: 'pending' },
    { text: 'processing', value: 'processing' },
    { text: 'on-hold', value: 'on-hold' },
    { text: 'completed', value: 'completed' },
    { text: 'cancelled', value: 'cancelled' },
    { text: 'refunded', value: 'refunded' },
    { text: 'failed', value: 'failed' },
    { text: 'trash', value: 'trash' }
  ];
  constructor(private http: HttpClient, private wooQRY: WooQryService,private orderService: OrderService) { }
  baseUrl: string = "https://cebuhomebuilders.com/wp-json/wc/v3/orders/";
  ngOnInit() {
    this.getOrders();
  }
  getOrders() {
    let params = {}
    this.orderService.getOrders(params).subscribe(
      res => {this.total = parseInt(res.headers.get('X-WP-Total'));this.orders = res.body;this.loading = false;}
    )
  }
  onQueryParamsChange(params: NzTableQueryParams): void {
    if (params.filter[0].value < 1) {
     params.filter[0].value = ["any"]
  }
    console.log(params.filter[0].value)
    this.loading = true;
    let wooparams = {
      "page": params.pageIndex,
      "per_page": params.pageSize,
      "status": params.filter[0].value
    }
    this.orderService.getOrders(wooparams).subscribe(
      res => {this.total = parseInt(res.headers.get('X-WP-Total'));this.orders = res.body;this.loading = false}
    )
  }
}
