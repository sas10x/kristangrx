import { Component, Input, OnInit } from '@angular/core';
import { bubbleData } from './data';

@Component({
  selector: 'app-k-bubble',
  templateUrl: './k-bubble.component.html',
  styleUrls: ['./k-bubble.component.scss']
})
export class KBubbleComponent implements OnInit {
  @Input() bubbleDatus: any[];
  bubbleData: any[];
  view: any[] = [1000, 700];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Frequency';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Quantities Sold';
  maxRadius: number = 20;
  minRadius: number = 5;
  yScaleMin: number = 1;
  yScaleMax: number = 3000;
  xScaleMin: number = 1;
  xScaleMax: number = 10000;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    Object.assign(this, { bubbleData });
    console.log(bubbleData);
  }

  ngOnInit() {
    console.log('from the bubble');
    console.log(this.bubbleDatus);
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
