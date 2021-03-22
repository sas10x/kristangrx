import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { select } from '@ngrx/store';
import { AnyCnameRecord } from 'dns';
import { Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Babol } from 'src/app/models/inventory/Babol';
import { Overview } from 'src/app/models/inventory/Overview';
import { InventoryService } from 'src/app/services/inventory/inventory.service';
interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}
@Component({
  selector: 'app-k-analytics',
  templateUrl: './k-analytics.component.html',
  styleUrls: ['./k-analytics.component.scss'],
  providers: [DatePipe]
})
export class KAnalyticsComponent implements OnInit {
  babol: Babol[];
  bubbleDatus: any[];
  bubbleSeries: any[];
  datus: any[];
  subbrands: Subscription; 
  submanagers: Subscription;
  substatus: Subscription;
  subcategories: Subscription;
  brands: any[] = [];
  managers: any[] = [];
  status: any[] = [];
  categories: any[] = [];

  listOfOption: string[] = [];
  listOfSelectedValue = ['a10', 'c12'];
  overview: Overview;
  
  rty: any[];

  sales: any[];

  zcaspos: any[];
  zor: any[];
  zqt: any[];


  sale: {};
  inputValue: string = "";
  date = null;
  constructor(private datepipe: DatePipe, private inventoryService: InventoryService) { }

  ngOnInit(): void {
    this.zorroselect();
    this.getBrands();
    this.getManagers();
    this.getStatus();
    this.getCategories();
    // this.getReportBubble();
  }
 
  zorroselect() {
    const children: string[] = [];
    for (let i = 10; i < 36; i++) {
      children.push(`${i.toString(36)}${i}`);
    }
    
    this.listOfOption = children;
    console.log(this.listOfOption);
  }
  onChange(result: Date[]): void {
    var str =(result[0].toDateString());
    console.log((str.substr(str.indexOf(' ') + 1)));
    console.log('onChange: ', result);
    console.log('onChange: ', result);
    let from =this.datepipe.transform(result[0], 'MM/dd/yyyy');
    let to =this.datepipe.transform(result[1], 'yyyy-MM-dd');
    console.log(from);
    this.inventoryService.getReportData(this.inputValue).subscribe(
      res => {
        
      }
    )
  }
  

  getBrands() {
    this.subbrands = this.inventoryService.getBrands().subscribe(
      res => {
        this.brands = res;
      })
  }
  getManagers() {
    this.submanagers = this.inventoryService.getManagers().subscribe(
      res => {
        this.managers = res;
      })
  }
  getStatus() {
    this.substatus = this.inventoryService.getStatus().subscribe(
      res => {
        this.status = res
      })
  }
  getCategories() {
    this.subcategories = this.inventoryService.getCategories().subscribe(
      res => {
        this.categories = res;
      })
  }
  
  log(){
    console.log(this.inputValue);
    console.log('click dropdown button');
  }

  getSales() {
    this.rty = [];
    this.sales = [];
    this.zcaspos = [];
    this.zor = [];
    this.zqt = [];
    console.log(this.inputValue);
    this.inventoryService.getReportData(this.inputValue).subscribe(
      res => {
        this.zcaspos.push({"name":"CASH","series":res});
        this.zcaspos = [...this.zcaspos];
        this.sales = this.sales.concat(this.zcaspos);
      }
    )
    this.inventoryService.getReportZor(this.inputValue).subscribe(
      res => {
        this.zor.push({"name":"ZOR","series":res});
        this.zor = [...this.zor];
        this.sales = this.sales.concat(this.zor);
      }
    )
    this.inventoryService.getReportZqt(this.inputValue).subscribe(
      res => {
        this.zqt.push({"name":"ZQT","series":res});
        this.zqt = [...this.zqt];
        this.sales = this.sales.concat(this.zqt);
      }
    )
    this.getReportOverview();
    this.getReportAll();
    
  }
  getReportOverview() {
    this.rty = [];
    this.inventoryService.getReportOverview(this.inputValue).subscribe(
      res => {
        this.overview = res;
        this.rty.push({"name":"Average","value":this.overview.average});
        this.rty.push({"name":"Highest","value":this.overview.highest});
        this.rty.push({"name":"Lowest","value":this.overview.lowest});
        this.rty.push({"name":"Total","value":this.overview.total});
        this.rty.push({"name":"Total Records","value":this.overview.totalRecords});
        this.rty = [...this.rty];
      }
    )
  }
  getReportAll() {
    this.inventoryService.getReportAll(this.inputValue).subscribe(
      res => {
        this.datus = res;
        console.log(this.datus)
      }
    )
  }
  // getReportBubble() {
  //   this.bubbleSeries = [];
  //   this.inventoryService.getReportBubble().subscribe(
  //     res => {
  //       console.log('bubble');
  //       console.log(res);
  //       for (let i = 0; i < res.length; i++) {
  //         this.bubbleSeries.push({"name":res[i].description,y:res[i].frequency,x:res[i].total,r: 100});
  //       }
  //     })
  //     this.bubbleSeries = [...this.bubbleSeries];
  //     console.log(this.bubbleSeries);
  //     this.bubbleDatus = [{name: "Qty vs Freq", series: this.bubbleSeries},{name: "Freq", series: this.bubbleSeries}]
  //     console.log(this.bubbleDatus);
  // }
  ngOnDestroy() {
    this.subbrands.unsubscribe();
    this.submanagers.unsubscribe();
    this.substatus.unsubscribe();
    this.subcategories.unsubscribe();
  }
}
