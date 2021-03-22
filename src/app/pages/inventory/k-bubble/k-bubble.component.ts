import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { CourierService } from 'src/app/services/inventory/courier.service';
import { bubbleData } from './data';

@Component({
  selector: 'app-k-bubble',
  templateUrl: './k-bubble.component.html',
  styleUrls: ['./k-bubble.component.scss']
})
export class KBubbleComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<string>();
  @Input() bubbleDatus: any[];
  message:string;
  subscription: Subscription;
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
  xScaleMax: number = 11000;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(private courierService: CourierService) {
    Object.assign(this, { bubbleData });
    console.log(bubbleData);
  }

  ngOnInit() {
    console.log('from the bubble');
    console.log(this.bubbleDatus);
    this.courier();
  }
  courier() {
    this.subscription = this.courierService.currentMessage.subscribe(message => 
      {
        this.message = message;
      })
  }
  newMessage(article) {
    this.courierService.changeMessage(article);
  }
  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
    this.newMessage(data.article);
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
