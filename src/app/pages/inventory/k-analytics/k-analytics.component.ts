import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'src/app/services/inventory/inventory.service';
interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}
@Component({
  selector: 'app-k-analytics',
  templateUrl: './k-analytics.component.html',
  styleUrls: ['./k-analytics.component.scss'],
  providers: [DatePipe]
})
export class KAnalyticsComponent implements OnInit {
  inputValue: string = "";
  date = null;
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
  constructor(private datepipe: DatePipe, private inventoryService: InventoryService) { }

  ngOnInit(): void {
    // this.createSerialNum(44260);
    this.createDateFromSerial(44260)
  }
  getSales() {
    console.log(this.inputValue);
    this.inventoryService.getSales(this.inputValue).subscribe(
      res => console.log(res)
    )
  }
  onChange(result: Date[]): void {
    var str =(result[0].toDateString());
    console.log((str.substr(str.indexOf(' ') + 1)));
    console.log('onChange: ', result);
    console.log('onChange: ', result);
    let from =this.datepipe.transform(result[0], 'MM/dd/yyyy');
    let to =this.datepipe.transform(result[1], 'yyyy-MM-dd');
    console.log(from);
    console.log(this.getJsDateFromExcel(result[0].toDateString()));
    // let params = {
    //   "date_min": from,
    //   "date_max": to
    // };
  }
  getJsDateFromExcel(excelDate) {

    // JavaScript dates can be constructed by passing milliseconds
    // since the Unix epoch (January 1, 1970) example: new Date(12312512312);
   
    // 1. Subtract number of days between Jan 1, 1900 and Jan 1, 1970, plus 1  (Google "excel leap year bug")             
   // 2. Convert to milliseconds.
   
    return new Date((excelDate - (25567 + 1))*86400*1000);
   
    }

  // getWeek(result: Date[]): void {
  //   console.log('week: ', result.map(getISOWeek));
  // }
  log(){
    console.log(this.inputValue);
    console.log('click dropdown button');
  }
  convert() {
    // var start = new Date('1900-01-01')
    // return (inDate - start)/(1000 * 60 * 60 * 24);
  }
  createSerialNum() {
    // 3/5/2021

    var oneDay = 24 * 60 * 60 * 1000;
    var firstDate = new Date(1899, 11, 30);
    var secondDate = new Date(2021, 2, 5+1);
    console.log(secondDate);
    var secondDateMidnight = new Date(secondDate.getFullYear(), secondDate.getMonth(), secondDate.getDate());
    var diff = secondDate.getTime() - secondDateMidnight.getTime();
    var left = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay))) - 1;
    var right = diff / oneDay;
    var result = left + right;
    console.log(result);
    return result;
  }
  createDateFromSerial(serialNum){
    serialNum = String(serialNum).split(".");
    var ogDate;
    var oneDay = 24 * 60 * 60 * 1000;
    var firstDate = new Date(1899, 11, 30);  
    var days = serialNum[0];
    var ms = serialNum[1] * oneDay;
    var mss = ms.toString();
    mss = String(ms).substring(0, 8);

    firstDate.setDate(days);

    ogDate = new Date(firstDate.getFullYear(), firstDate.getMonth(), firstDate.getDate(), 0, 0, 0, ms);
    console.log(ogDate);
    return ogDate;
  }
  // onChange(result: Date[]): void {
  //   this.sales = [];
  //   console.log('onChange: ', result);
  //   let from =this.datepipe.transform(result[0], 'yyyy-MM-dd');
  //   let to =this.datepipe.transform(result[1], 'yyyy-MM-dd');
  //   let params = {
  //     "date_min": from,
  //     "date_max": to
  //   };
  //   this.reportService.getSales(params).subscribe(
  //     res => {
  //       console.log(res);
  //       this.halin = res[0].totals;
  //       console.log(res[0].totals["2020-12-01"]);
  //       for (let q = result[0]; q <= result[1]; q.setDate(q.getDate() + 1)) {
  //         let petsa = this.datepipe.transform(q, 'yyyy-MM-dd');
  //         this.sales.push({"name":petsa.toString(),"value":+res[0].totals[petsa].sales});
  //         this.orders.push({"name":petsa.toString(),"value":res[0].totals[petsa].orders});
  //         this.items.push({"name":petsa.toString(),"value":res[0].totals[petsa].items});
  //         this.customers.push({"name":petsa.toString(),"value":res[0].totals[petsa].customers});
  //       }
  //       this.order = { name:'Orders', series: this.orders};
  //       this.item = { name:'Items', series: this.items};
  //       this.customer = { name:'Customers', series: this.customers};
  //       this.combo = [this.order, this.item, this.customer];
      
  //       this.combo = [...this.combo];
  //       this.sales = [...this.sales];
  //       console.log(this.combo);
  //       console.log(this.sales);
  //     }
  //   )
  // }
}
