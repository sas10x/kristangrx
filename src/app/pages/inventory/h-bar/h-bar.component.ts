import { Component, Input, OnInit } from '@angular/core';
import { single } from './data';

@Component({
  selector: 'app-h-bar',
  templateUrl: './h-bar.component.html',
  styleUrls: ['./h-bar.component.scss']
})
export class HBarComponent implements OnInit {
  @Input() qty: any[];
  single: any[];
  view: any[] = [700, 400];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'SLOC';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Number of Items';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    Object.assign(this, { single });
  }
  ngOnInit() {

  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

}
