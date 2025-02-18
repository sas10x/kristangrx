import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WooCmdService } from 'src/app/providers/woo-cmd.service';
import { WooQryService } from 'src/app/providers/woo-qry.service';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient, private wooQRY: WooQryService, private wooCMD: WooCmdService) { }

  baseUrl: string = "https://cebuhomebuilders.com/wp-json/wc/v3/reports/";

  // GET ALL PRODUCTS
  getSales(params) {
    let producturl:string = this.wooQRY.authenticateApi('GET',this.baseUrl+"sales",params);
    return this.http.get(producturl);
  }

  // getTopSellers(params) {
  //   let reporturl:string = this.wooQRY.authenticateApi('GET',this.baseUrl + 'top_sellers',params);
  //   return this.http.get(reporturl);
  // }
}
