import { Component, HostListener, Input, OnInit } from '@angular/core';
import { single } from './data';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {
  @Input() sales: any[];
  @Input() combo: any[];
  single: any[];
  multi: any[];

  view: any[] = [700, 400];

  public screenWidth: any;

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Date';
  showYAxisLabel = true;
  yAxisLabel = 'Sales(PHP)';

  colorScheme = {
    domain: ['#003f5c', '#2f4b7c', '#665191', '#a05195', '#d45087', '#f95d6a', '#ff7c43', '#ffa600', '#488f31', '#83af70', '#bad0af', '#f1f1f1', '#f0b8b8', '#e67f83', '#de425b']
  };

  constructor() {
    Object.assign(this, { single })
  }
 


  onSelect(event) {
    console.log(event);
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.view = [ this.screenWidth - .40 * this.screenWidth, 400];
    console.log('from BAR');
    console.log(this.sales);
    console.log(this.combo);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenWidth = window.innerWidth;
    this.view = [ this.screenWidth - .40 * this.screenWidth, 400];
  }
}
