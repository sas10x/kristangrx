import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { from } from 'rxjs';
import { concatMap, switchMap, tap } from 'rxjs/operators';
import { Sap } from 'src/app/models/inventory/Sap';
import { InventoryService } from 'src/app/services/inventory/inventory.service';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit {
  profileForm = new FormGroup({
    barcode: new FormControl('')
  });
  qty = [];
  rty = [];
  numero : Sap[] = [];
  constructor(private inventoryService:InventoryService) { }

  ngOnInit(): void {
  }
  onChange(product) {
    this.rty = [];
    this.qty = [];
    this.inventoryService.getSap(product.value.barcode).subscribe(
      res => {
        console.log(res);
        this.rty.push({"name":"ATP","value":+res[0].atp});
        this.rty.push({"name":"Confirm","value":+res[0].confirm});
        this.rty.push({"name":"Unrestricted","value":+res[0].unrestricted});

        this.qty.push({"name":"8201"+"("+res[1].atp.toString()+")","value":+res[1].atp});
        this.qty.push({"name":"8202"+"("+res[2].atp.toString()+")","value":+res[2].atp});
        if (res[3])
        {
          this.qty.push({"name":"8206","value":+res[3].atp});
        }
        this.qty = [...this.qty];
        this.rty = [...this.rty];
      }
    )
  }
  inv(product) {
    // console.log(product.value.barcode);
    const sapObs = this.inventoryService.getSap(product.value.barcode);
    const posObs = this.inventoryService.getPos(product.value.barcode);

    const combined = sapObs.pipe(
      switchMap(sapqty => {
        return posObs
        .pipe(
          tap(posqty => {
            console.log('POS', posqty);
            console.log('SAP', sapqty);
            if (posqty)
            {
              console.log(posqty.quantity);
              sapqty[0].atp = sapqty[0].atp - posqty.quantity;
              sapqty[0].unrestricted = sapqty[0].unrestricted - posqty.quantity;
              sapqty[1].atp = sapqty[1].atp - posqty.quantity;
            }
            this.rty.push({"name":"ATP","value":+sapqty[0].atp});
            this.rty.push({"name":"Confirm","value":+sapqty[0].confirm});
            this.rty.push({"name":"Unrestricted","value":+sapqty[0].unrestricted});

            this.qty.push({"name":"8201"+"("+sapqty[1].atp.toString()+")","value":+sapqty[1].atp});
            this.qty.push({"name":"8202"+"("+sapqty[2].atp.toString()+")","value":+sapqty[2].atp});
            if (sapqty[3])
            {
              this.qty.push({"name":"8206","value":+sapqty[3].atp});
            }
            
            this.qty = [...this.qty];
            this.rty = [...this.rty];
          })
        )
      })
    )
    combined.subscribe();
    // posObs.subscribe(
    //   res => console.log(res)
    // )
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


  // export var single = [
  //   {
  //     "name": "Germany",
  //     "value": 8940000
  //   },
  //   {
  //     "name": "USA",
  //     "value": 5000000
  //   },
  //   {
  //     "name": "France",
  //     "value": 7200000
  //   }
  // ];
  onSubmit() {

  }
}
