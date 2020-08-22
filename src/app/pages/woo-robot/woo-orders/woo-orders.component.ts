import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/woo/order/Order';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-woo-orders',
  templateUrl: './woo-orders.component.html',
  styleUrls: ['./woo-orders.component.scss']
})
export class WooOrdersComponent implements OnInit {
  orders: Order[];
  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.getOrders();
  }
  getOrders() {
    let params = {}
    this.orderService.getOrders(params).subscribe(
      res => this.orders = res
    )
  }
}
