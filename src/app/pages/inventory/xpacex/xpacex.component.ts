import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { arraysAreNotAllowedMsg } from '@ngrx/store/src/models';
import { from, Subscription } from 'rxjs';
import { concatMap, tap } from 'rxjs/operators';
import { InventoryService } from 'src/app/services/inventory/inventory.service';

@Component({
  selector: 'app-xpacex',
  templateUrl: './xpacex.component.html',
  styleUrls: ['./xpacex.component.scss'],
  providers: [DatePipe]
})
export class XpacexComponent implements OnInit {
  date = null;
  num: number = 0;
  name: string;
  subcategories: Subscription;
  selectedCategories: any[];
  categories: any[];
  bubbleRes: any[];
  bubbleSeries: any[];
  bubbleDatus: any[] = [];
  constructor(private datepipe: DatePipe,private inventoryService: InventoryService) { }

  ngOnInit(): void {
    // this.getReportBubble();
    this.getCategories();
    // this.getReportBubble();
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
  onChange(result: Date[]): void {
    var str =(result[0].toDateString());
    console.log((str.substr(str.indexOf(' ') + 1)));
    console.log('onChange: ', result);
    console.log('onChange: ', result);
    let from =this.datepipe.transform(result[0], 'MM/dd/yyyy');
    let to =this.datepipe.transform(result[1], 'yyyy-MM-dd');
    console.log(from);
    console.log(to);
  }
  onClick() {
    // this.bubbleDatus = [];
    console.log(this.categories);
    console.log(this.selectedCategories);
    from(this.selectedCategories)
    .pipe(tap(res => console.log(res)))
    .pipe(concatMap(res => this.inventoryService.getReportBubble(res)))
    .subscribe(res => {
      this.num = this.num + 1;
      this.bubbleRes = [{name: this.selectedCategories[this.num-1], series: res}];
      this.bubbleDatus = this.bubbleDatus.concat(this.bubbleRes);
    })
  }
  onClickDate() {
    // this.bubbleDatus = [];
    console.log(this.categories);
    console.log(this.selectedCategories);
    from(this.selectedCategories)
    .pipe(tap(res => console.log(res)))
    .pipe(concatMap(res => this.inventoryService.getReportBubble(res)))
    .subscribe(res => {
      this.num = this.num + 1;
      this.bubbleRes = [{name: this.selectedCategories[this.num-1], series: res}];
      this.bubbleDatus = this.bubbleDatus.concat(this.bubbleRes);
    })
  }
}
