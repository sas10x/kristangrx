import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { arraysAreNotAllowedMsg } from '@ngrx/store/src/models';
import { from, Subscription } from 'rxjs';
import { concatMap, tap } from 'rxjs/operators';
import { CourierService } from 'src/app/services/inventory/courier.service';
import { InventoryService } from 'src/app/services/inventory/inventory.service';
interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'app-xpacex',
  templateUrl: './xpacex.component.html',
  styleUrls: ['./xpacex.component.scss'],
  providers: [DatePipe]
})
export class XpacexComponent implements OnInit {
  scala: any = {};
  xScaleMax: number;
  yScaleMax: number;
  header: string;
  data: any[];
  hide: boolean = false;
  message: any = {};
  subscription: Subscription;
  listOfData: Person[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];
  to: string;
  from: string;
  date = null;
  num: number = 0;
  name: string;
  subcategories: Subscription;
  submanagers: Subscription;
  subbrands: Subscription;
  selectedCategories: any[];
  selectedBrands: any[];
  selectedManagers: any[];
  categories: any[];
  brands: any[];
  managers: any[];
  bubbleRes: any[];
  bubbleSeries: any[];
  bubbleDatus: any[] = [];
  constructor(private courierService: CourierService, private datepipe: DatePipe,private inventoryService: InventoryService) { }

  ngOnInit(): void {
    // this.getReportBubble();
    this.getCategories();
    this.getBrands();
    this.getManagers();
    // this.getReportBubble();
    this.courier();
  }
  courier() {
    this.subscription = this.courierService.currentMessage.subscribe(message => {
      if (message.article)
      { 
        this.data=[];
        this.inventoryService.getZmpq25b(message.article).subscribe(
          res => {
            this.data = res;
            this.header = this.data[0].description;
          })
      }
    })
}

  receiveMessage($event) {
    console.log('ASSAULT');
    this.message = $event
    console.log(this.message);
  }
  getReportBubble() {
    this.bubbleSeries = [];
    this.inventoryService.getReportBubble("TILES AND STONE").subscribe(
      res => {
        this.bubbleDatus = [{name: "Qty vs Freq", series: res}];                 
      })
  }
  getCategories() {
    this.subcategories = this.inventoryService.getCategories().subscribe(
      res => {
        this.categories = res;
      })
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
  onClick() {
    this.num = 0;
    from(this.selectedCategories)
    .pipe(tap(res => console.log(res)))
    .pipe(concatMap(res => this.inventoryService.getReportBubble(res)))
    .subscribe(res => {
      let bar: any = {};
      bar.xScaleMax = Math.max.apply(Math, res.map(function(o) { return o.x; }));
      bar.yScaleMax = Math.max.apply(Math, res.map(function(o) { return o.y; }));
      this.newMessage(bar);
      
      this.num = this.num + 1;
      this.bubbleRes = [{name: this.selectedCategories[this.num-1], series: res}];
      this.bubbleDatus = this.bubbleDatus.concat(this.bubbleRes);
    })
  }
  onChange(result: Date[]): void {
    this.from =this.datepipe.transform(result[0], 'MM/dd/yyyy');
    this.to =this.datepipe.transform(result[1], 'MM/dd/yyyy');
    
  }
  onClickDate() {
    let params = {
      from : this.from,
      to: this.to
    }
    this.inventoryService.getReportPetsa(params).subscribe(
      res => {
        let bar: any = {};
        bar.xScaleMax = Math.max.apply(Math, res.map(function(o) { return o.x; }));
        bar.yScaleMax = Math.max.apply(Math, res.map(function(o) { return o.y; }));
        this.newMessage(bar);

        this.bubbleDatus = [{name: this.from + " to " + this.to , series: res}];
      }
    )
  }
  onClickBrand() {
    this.num = 0;
    from(this.selectedBrands)
    .pipe(tap(res => console.log(res)))
    .pipe(concatMap(res => this.inventoryService.getReportBrands(res)))
    .subscribe(res => {
      let bar: any = {};
      bar.xScaleMax = Math.max.apply(Math, res.map(function(o) { return o.x; }));
      bar.yScaleMax = Math.max.apply(Math, res.map(function(o) { return o.y; }));
      this.newMessage(bar);

      this.num = this.num + 1;
      this.bubbleRes = [{name: this.selectedBrands[this.num-1], series: res}];
      this.bubbleDatus = this.bubbleDatus.concat(this.bubbleRes);
    })
  }
  onClickManager() {
    this.num = 0;
    from(this.selectedManagers)
    .pipe(tap(res => console.log(res)))
    .pipe(concatMap(res => this.inventoryService.getReportManagers(res)))
    .subscribe(res => {
      let bar: any = {};
      bar.xScaleMax = Math.max.apply(Math, res.map(function(o) { return o.x; }));
      bar.yScaleMax = Math.max.apply(Math, res.map(function(o) { return o.y; }));
      this.newMessage(bar);

      this.num = this.num + 1;
      this.bubbleRes = [{name: this.selectedManagers[this.num-1], series: res, xScaleMax:this.xScaleMax, yScaleMax: this.yScaleMax }];
      this.bubbleDatus = this.bubbleDatus.concat(this.bubbleRes);
    })
  }
  newMessage(scala) {
    this.courierService.changeMessage(scala);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
