import { Component, Input, OnInit } from '@angular/core';
import { single } from './data';

@Component({
  selector: 'app-h-number',
  templateUrl: './h-number.component.html',
  styleUrls: ['./h-number.component.scss']
})
export class HNumberComponent {
  @Input() rty: any[];
  single: any[];
  view: any[] = [700, 400];

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
  cardColor: string = '#232837';
  
  constructor() {
    Object.assign(this, { single });
  }

  onSelect(event) {
    console.log(event);
  }

}
