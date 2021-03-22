import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AnyCnameRecord, AnyNaptrRecord } from 'dns';
import { AutocompleteOptionGroups } from 'src/app/models/inventory/AutocompleteOptionGroups';
import { Babol } from 'src/app/models/inventory/Babol';
import { Overview } from 'src/app/models/inventory/Overview';
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
  getZmpq25b(article: string) {
    return this.http.get<[]>(this.sapURL + "zmpq25b/" + article);
  }
  getZva05n(article: string) {
    return this.http.get<[]>(this.sapURL + "zva05n/" + article);
  }
  getMb51(article: string) {
    return this.http.get<[]>(this.sapURL + "mb51/" + article);
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
  addMaterial(body) {
    // console.log(body);
    let params = 
    {
      "Article" : body.Article,
      "Description" : body.Description,
      "Uom" : body.Uom,
      "Gtin" : body.Gtin,
      "Status" : body.Status,
      "Brand" : body.Brand,
      "Category" : body.Category,
      "Manager" : body.Manager
    }
    console.log(params);
    return this.http.post(this.sapURL + "material", params);
  }
  addSO(body) {
    console.log(body);
    let params = 
    {
      "Article" : body.Article,
      "Description" : body.Description,
      "Uom" : body.Uom,
      "Gtin" : body.Gtin.toString,
      "Status" : body.Status,
      "Brand" : body.Brand,
      "Category" : body.Category,
      "Manager" : body.Manager
    }
    return this.http.post(this.sapURL + "so", params);
  }
  addStock(body) {
    console.log(body.SLoc);
    if (!body.SLoc)
    {
      body.SLoc = "";
    }
    let params = 
    {
      "Article" : body.Article,
      "Gtin" : body.Gtin,
      "Description" : body.Description,
      "BUn" : body.BUn,
      "Site" : body.Site,
      "SLoc" : body.SLoc,
      "Unrestricted" : body.Unrestricted,
      "Confirm" : body.Confirm,
      "ATP" : body.ATP,
      "Brand" : body.Brand,
      "Status" : body.Status,
      "Size" : body.Size,
    }
    console.log('params');
    console.log(params);
    return this.http.post(this.sapURL + "zmpq25b", params);
  }

  addZva05n(body) {
    // console.log(body);
    console.log(body);
    let params = 
    {
      "DeliveryStatus" : body.DeliveryStatus,
      "SO" : body.SO,
      "Rfr" : body.Rfr,
      "Site" : body.Site,
      "SLoc" : body.SLoc,
      "ShpTyp" : body.ShpTyp,
      "Docdate" : body.Docdate,
      "ItemNum" : body.ItemNum,
      "ArtNum" : body.ArtNum,
      "ArticleDescription" : body.ArticleDescription,
      "UoM" : body.UoM,
      "OrderedQty" : body.OrderedQty,
      "ConfQty" : body.ConfQty,
      "PgiQty" : body.PgiQty,
      "QtyToDeliv" : body.QtyToDeliv,
      "UnitPrice" : body.UnitPrice,
      "NetAmt" : body.NetAmt,
      "NetTax" : body.NetTax,
      "InvoiceAmt" : body.InvoiceAmt,
      "TotalPending" : body.TotalPending,
      "SalesOrg" : body.SalesOrg,
      "SType" : body.SType,
      "Salesman" : body.SLoc,
      "CustCode" : body.CustCode,
      "SalGrp" : body.SalGrp,
      "CreatedBy" : body.CreatedBy,
      "Entrytime" : body.Entrytime,
      "CCodeToBeBilled" : body.CCodeToBeBilled,
      "DistChan" : body.DistChan,
      "Division" : body.Division,
    }
    // console.log(params);
    return this.http.post(this.sapURL + "zva05n", params);
  }
  addMb51(body) {
    // console.log(body);
    let params = 
    {
      EntryDate : body.EntryDate,
      PstngDate : body.PstngDate,
      Time : body.Time,
      DocDate : body.DocDate,
      ArtDoc : body.ArtDoc,
      Article : body.Article,
      ArticleDescription : body.ArticleDescription,
      BUn : body.BUn,
      Quantity : body.Quantity,
      MvT :  body.MvT,
      Site : body.Site,
      SLoc : body.SLoc,
      Customer : body.Customer,
      MvtTypeText : body.MvtTypeText,
      Name1 : body.Name1,
      Username : body.Username,
      GtrStatus : "pending"
        
    }
    console.log(params);
    return this.http.post(this.sapURL + "mb51", params);
  }
  addCategory(body) {
    // console.log(body);
    let params = 
    {
      Category : body.name,
    }
    console.log(params);
    return this.http.post(this.sapURL + "add/category", params);
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
  getSales(article) {
    return this.http.get<any[]>(this.sapURL + "report/" + article);
  }

  getReportOverview(article) {
    return this.http.get<Overview>(this.sapURL + "report/" + article);
  }
  getReportData(article) {
    return this.http.get<any[]>(this.sapURL + "report/data/" + article);
  }
  getReportZor(article) {
    return this.http.get<any[]>(this.sapURL + "report/zor/" + article);
  }
  getReportZqt(article) {
    return this.http.get<any[]>(this.sapURL + "report/zqt/" + article);
  }
  getReportAll(article) {
    return this.http.get<any[]>(this.sapURL + "report/all/" + article);
  }
  getReportBubble(category) {
    return this.http.get<Babol[]>(this.sapURL + "report/bubble/" + category );
  }
  getReportPetsa(params) {
    return this.http.get<Babol[]>(this.sapURL + "report/petsa" + "?from=" + params.from + "&to=" + params.to);
  }
  getBrands() {
    return this.http.get<any[]>(this.sapURL + "get/brand/");
  }
  getManagers() {
    return this.http.get<any[]>(this.sapURL + "get/manager/");
  }
  getStatus() {
    return this.http.get<any[]>(this.sapURL + "get/status/");
  }
  getCategories() {
    return this.http.get<any[]>(this.sapURL + "get/category");
  }
}
