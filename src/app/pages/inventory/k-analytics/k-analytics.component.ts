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
  mvt641: any[];
  mvt101: any[];
  mvt311: any[];
  mvt301: any[];
  mvt161: any[];
  mvt601: any[];
  mvt251: any[];

  lineon: any[];
  baron: any[];
  movit: any[];
  temp: any[];

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
      },
      err => console.error('Observer got an error: ' + err),
      () => console.log('Observer got a complete notification')
    )
    this.inventoryService.getReportZor(this.inputValue).subscribe(
      res => {
        this.zor.push({"name":"ZOR","series":res});
        this.zor = [...this.zor];
        this.sales = this.sales.concat(this.zor);
      },
      err => console.error('Observer got an error: ' + err),
      () => console.log('Observer got a complete notification')
    )
    this.inventoryService.getReportZqt(this.inputValue).subscribe(
      res => {
        this.zqt.push({"name":"ZQT","series":res});
        this.zqt = [...this.zqt];
        this.sales = this.sales.concat(this.zqt);
      },
      err => console.error('Observer got an error: ' + err),
      () => console.log('Observer got a complete notification')
    )
    this.getReportOverview();
    this.getReportAll();
    this.getReportBar();
    // this.getReportBar();
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
      },
      err => console.error('Observer got an error: ' + err),
      () => console.log('Observer got a complete notification')
    )
  }
  getReportAll() {
    this.inventoryService.getReportAll(this.inputValue).subscribe(
      res => {
        this.datus = res;
        console.log(this.datus)
      },
      err => console.error('Observer got an error: ' + err),
      () => console.log('Observer got a complete notification')
    )
  }
  getReportBar() {
    console.log('bar');
    this.mvt641 = [];
    this.mvt101 = [];
    this.mvt311= [];
    this.mvt301= [];
    this.mvt161= [];
    this.mvt601= [];
    this.mvt251= [];

    this.lineon = [];
    this.movit = [];
    this.baron = [];
    this.inventoryService.getReportComboBar(this.inputValue).subscribe(
      res => {
        this.lineon = res;
      }
    )
    this.inventoryService.getReportComboLine(this.inputValue).subscribe(
      res => {
        console.log(res);
        for (var val of res) {
          if (val.mvT == "641")
          {
            this.mvt641.push({"name":val.pstngDate,"value":val.quantity,"sloc":val.sLoc});
          }
          if (val.mvT == "101")
          {
            this.mvt101.push({"name":val.pstngDate,"value":val.quantity,"sloc":val.sLoc});
          }
          if (val.mvT == "311")
          {
            this.mvt311.push({"name":val.pstngDate,"value":val.quantity,"sloc":val.sLoc});
          }
          if (val.mvT == "301")
          {
            this.mvt301.push({"name":val.pstngDate,"value":val.quantity,"sloc":val.sLoc});
          }
          if (val.mvT == "161")
          {
            this.mvt161.push({"name":val.pstngDate,"value":val.quantity,"sloc":val.sLoc});
          }
          if (val.mvT == "601")
          {
            this.mvt601.push({"name":val.pstngDate,"value":val.quantity,"sloc":val.sLoc});
          }
          if (val.mvT == "251")
          {
            this.mvt251.push({"name":val.pstngDate,"value":val.quantity,"sloc":val.sLoc});
          }
        }

        if (this.mvt641.length >= 1)
        {
          this.baron.push({"name":"641","series":this.mvt641});
        }
        if (this.mvt101.length >= 1)
        {
          this.baron.push({"name":"101","series":this.mvt101});
        }
        if (this.mvt311.length >= 1)
        {
          this.baron.push({"name":"311","series":this.mvt311});
        }
        if (this.mvt301.length >= 1)
        {
          this.baron.push({"name":"641","series":this.mvt301});
        }
        if (this.mvt161.length >= 1)
        {
          this.baron.push({"name":"641","series":this.mvt161});
        }
        if (this.mvt601.length >= 1)
        {
          this.baron.push({"name":"641","series":this.mvt601});
        }
        if (this.mvt251.length >= 1)
        {
          this.baron.push({"name":"641","series":this.mvt251});
        }
        console.log('BARON');
        console.log(this.baron);
        // console.log(this.mvt641);
        // console.log(this.mvt101);
        // console.log(this.mvt311);
        // console.log(this.mvt301);
        // console.log(this.mvt161);
        // console.log(this.mvt601);
        // console.log(this.mvt251);    
      },
      err => console.error('Observer got an error: ' + err),
      () => console.log('Observer got a complete notification')
    )
  }
  kfilterArray(array, check) {
    var newArray = array.filter(function (el) {
      return el.mvT == check 
    });
  }
  // }
  // checkDate(petsa, array) {
  //   return petsa == array.pstngDate
  // }
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
