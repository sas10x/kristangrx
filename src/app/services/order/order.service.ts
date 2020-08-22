import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WooQryService } from '../../providers/woo-qry.service';
import { WooCmdService } from '../../providers/woo-cmd.service';
import { Order } from '../../models/woo/order/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient, private wooQRY: WooQryService, private wooCMD: WooCmdService) { }
  baseUrl: string = "https://cebuhomebuilders.com/wp-json/wc/v3/orders/";

  // GET ALL ORDERS
  getOrders(params) {
    let orderurl:string = this.wooQRY.authenticateApi('GET',this.baseUrl,params);
    return this.http.get<Order[]>(orderurl);
  }
}
