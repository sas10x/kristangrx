import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WooQryService } from '../../providers/woo-qry.service';
import { WooCmdService } from '../../providers/woo-cmd.service';
import { Customer } from '../../models/woo/customer/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient, private wooQRY: WooQryService, private wooCMD: WooCmdService) { }
  baseUrl: string = "https://cebuhomebuilders.com/wp-json/wc/v3/customers/";

  // GET ALL ORDERS
  getCustomers(params) {
    let customerurl:string = this.wooQRY.authenticateApi('GET',this.baseUrl,params);
    return this.http.get<any>(customerurl, {observe: 'response'});
  }

  // getOrders(params) {
  //   let orderurl:string = this.wooQRY.authenticateApi('GET',this.baseUrl,params);
  //   return this.http.get<any>(orderurl, {observe: 'response'});
  // }
}
