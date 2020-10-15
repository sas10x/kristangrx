import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WooCmdService } from 'src/app/providers/woo-cmd.service';
import { WooQryService } from 'src/app/providers/woo-qry.service';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient, private wooQRY: WooQryService, private wooCMD: WooCmdService) { }
  baseUrl: string = "https://cebuhomebuilders.com/wp-json/wc/v3/reports/";

  getTopSellers(params) {
    let reporturl:string = this.wooQRY.authenticateApi('GET',this.baseUrl + 'top_sellers',params);
    return this.http.get(reporturl);
  }
}
