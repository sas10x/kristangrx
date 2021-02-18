import { Component, Input, OnInit } from '@angular/core';
import { single } from './data';

@Component({
  selector: 'app-h-pie-grid',
  templateUrl: './h-pie-grid.component.html',
  styleUrls: ['./h-pie-grid.component.scss']
})
export class HPieGridComponent implements OnInit {
  @Input() qty: any[];
  single: any[];
  view: any[] = [500, 400];

  // options
  showLegend: boolean = true;
  showLabels: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor() {
    Object.assign(this, { single });
  }

  onSelect(event) {
    console.log(event);
  }

  ngOnInit(): void {
  }

}
