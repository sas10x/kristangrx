import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AnyCnameRecord } from 'dns';
import { AutocompleteOptionGroups } from 'src/app/models/inventory/AutocompleteOptionGroups';
import { Pos } from 'src/app/models/inventory/Pos';
import { Price } from 'src/app/models/inventory/Price';
import { Sap } from 'src/app/models/inventory/Sap';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private http: HttpClient) { }
  readonly posURL = 'http://heusc:7000/api/pos/';
  readonly sapURL = 'http://localhost:5000/api/sap/';
  readonly priceURL = 'http://heusc:7000/api/pos/presyo/';
  // getaActivity(activityId: string): Observable<Activity> {
  //   return this.http.get<Activity>(this.baseUrl + activityId);
  // }
  getPos(barcode: string) {
    return this.http.get<Pos>(this.posURL + barcode);
  }
  getSap(barcode: string) {
    return this.http.get<Sap>(this.sapURL + barcode);
  }
  addMovement(body) {
    let params = 
    {
      "Document" : body.Document.toString(),
      "Article" : body.Article.toString(),
      "BUn" : body.BUn,
      "Quantity" : body.Quantity.toString(),
      "MvT" : body.MvT.toString(),
      "Site" : body.Site.toString(),
      "SLoc" : body.SLoc.toString()
    }
    return this.http.post(this.sapURL, params);
  }
  getPrice(barcode: string) {
    return this.http.get<Price>(this.priceURL + barcode);
  }
  getProduct(search: string) {
    return this.http.get<AutocompleteOptionGroups[]>(this.sapURL + "find/"+ search);
  }
  getProducts() {
    return this.http.get<Sap[]>(this.sapURL + "availability");
  }
}
