import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../models/product';
import { Observable } from 'rxjs';
import { productStateFeatureKey } from '../../root-store/product-store';
import { WooQryService } from '../../providers/woo-qry.service';
import { WooCmdService } from '../../providers/woo-cmd.service';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient, private wooQRY: WooQryService, private wooCMD: WooCmdService) { }
  baseUrl: string = "https://cebuhomebuilders.com/wp-json/wc/v3/products/";
  createUrl: string = "https://cebuhomebuilders.com/wp-json/wc/v3/products";

  // GET ALL PRODUCTS
  getProducts(params) {
    let producturl:string = this.wooQRY.authenticateApi('GET',this.baseUrl,params);
    return this.http.get(producturl);
  }
  // GET PRODUCT by Article 
  getProductbySku(article: number) : Observable<any> {
    let body = {
      sku: article
    }
    let producturl:string = this.wooQRY.authenticateApi('GET',this.baseUrl, body);
    return this.http.get(producturl);
  }
  // GET PRODUCT by Id
  getProductbyId(id: string) {
    let body = {
    }
    let producturl:string = this.wooQRY.authenticateApi('GET',this.baseUrl+id, body);
    return this.http.get(producturl);
  }
  // CREATE PRODUCT
  createProduct(body) {
    let params = {}
    let producturl:string = this.wooCMD.authenticateApi('POST',this.createUrl, params);
    return this.http.post(producturl, body)
  }
  // EDIT PRODUCT
  updateProduct(id: string, body){
    let params = {};
    let producturl:string = this.wooCMD.authenticateApi('PUT',this.baseUrl + id, params);
    return this.http.put(producturl, body);
  }
    // UPDATE BATCH
    updateBatch(body){
      let params = {};
      let producturl:string = this.wooCMD.authenticateApi('POST',this.baseUrl + 'batch', params);
      return this.http.post(producturl, body);
    }
}
