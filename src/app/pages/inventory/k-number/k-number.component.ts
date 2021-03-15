import { Component, OnInit } from '@angular/core';
import { single } from './data';

@Component({
  selector: 'app-k-number',
  templateUrl: './k-number.component.html',
  styleUrls: ['./k-number.component.scss']
})
export class KNumberComponent implements OnInit {



  ngOnInit(): void {
  }

  single: any[];
  view: any[] = [400, 300];

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
