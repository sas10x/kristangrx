import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common'
import { ReportService } from 'src/app/services/report/report.service';


@Component({
  selector: 'app-woo-reports',
  templateUrl: './woo-reports.component.html',
  styleUrls: ['./woo-reports.component.scss'],
  providers: [DatePipe]
})
export class WooReportsComponent implements OnInit {
  mvt641: any[];
  mvt101: any[];
  mvt311: any[];
  mvt301: any[];
  mvt161: any[];
  mvt601: any[];
  mvt251: any[];

  date = null;
  sales = [];

  combo = [];

  order = {};
  item = {};
  customer = {};

  orders = [];
  items = [];
  customers = [];

  halin = [];
  constructor(public datepipe: DatePipe, private reportService: ReportService) { }

  ngOnInit() {
    // this.getTopSellers();
  }
  onChange(result: Date[]): void {
    this.sales = [];
    console.log('onChange: ', result);
    let from =this.datepipe.transform(result[0], 'yyyy-MM-dd');
    let to =this.datepipe.transform(result[1], 'yyyy-MM-dd');
    let params = {
      "date_min": from,
      "date_max": to
    };
    this.reportService.getSales(params).subscribe(
      res => {
        console.log(res);
        this.halin = res[0].totals;
        console.log(res[0].totals["2020-12-01"]);
        for (let q = result[0]; q <= result[1]; q.setDate(q.getDate() + 1)) {
          let petsa = this.datepipe.transform(q, 'yyyy-MM-dd');
          this.sales.push({"name":petsa.toString(),"value":+res[0].totals[petsa].sales});
          this.orders.push({"name":petsa.toString(),"value":res[0].totals[petsa].orders});
          this.items.push({"name":petsa.toString(),"value":res[0].totals[petsa].items});
          this.customers.push({"name":petsa.toString(),"value":res[0].totals[petsa].customers});
        }
        this.order = { name:'Orders', series: this.orders};
        this.item = { name:'Items', series: this.items};
        this.customer = { name:'Customers', series: this.customers};
        this.combo = [this.order, this.item, this.customer];
      
        this.combo = [...this.combo];
        this.sales = [...this.sales];
        console.log(this.combo);
        console.log(this.sales);
      }
    )
  }
}
