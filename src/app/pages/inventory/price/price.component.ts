import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { concatMap, debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { Price } from 'src/app/models/inventory/Price';
import { Sap } from 'src/app/models/inventory/Sap';
import { InventoryService } from 'src/app/services/inventory/inventory.service';

export interface AutocompleteOptionGroups {
  description: string;
  article?: number;
  barcode?: number;
}

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit {
  inputValue?: string;
  optionGroups: AutocompleteOptionGroups[] = [];

  subject = new Subject()
  filteredOptions: any[] = [];
  options = [
    {
      description: '话题1',
      barcode:  201011,
      article: 101011,
    },
    {
      description: '话题2',
      barcode:  201012,
      article: 101012,
    },
    {
      description: '话题3',
      barcode:  201013,
      article: 101013,
    },
  ];

  profileForm = new FormGroup({
    barcode: new FormControl('')
  });
  qty = [];
  rty = [];
  numero : Sap[] = [];
  price: Price;
  constructor(private inventoryService:InventoryService) { 
    this.filteredOptions = this.options;
    console.log(this.filteredOptions);
  }

  ngOnInit(): void {
    // this.optionGroups = [
    //   {
    //     description: '话题1',
    //     barcode:  201011,
    //     article: 101011,
    //   },
    //   {
    //     description: '话题2',
    //     barcode:  201012,
    //     article: 101012,
    //   },
    //   {
    //     description: '话题3',
    //     barcode:  201013,
    //     article: 101013,
    //   },
    // ];

  console.log(this.optionGroups);
  }
  onChange(value): void {
    console.log(value);
    // this.inventoryService.getProduct(value).subscribe(
    //   res => this.optionGroups = res
    // )
    //   this.results$ = this.subject.pipe(
    //   debounce(() => Rx.Observable.interval(1000)),
    //   map(searchText => this.httpClient.get("/api/search?q=" + searchText))
    // )
    if (!isNaN(value) && value.length == 13)
    {
      this.onSubmit(value);
    } 
    if (value.length > 2)
    {
      this.inventoryService.getProduct(value.toString()).pipe(
        debounceTime(1000),
        distinctUntilChanged(),
      ).subscribe(
        res => this.optionGroups = res);
    }
  }
 
  inv(product) {
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

  onSubmit(product) {
    console.log('submit');
    console.log(product);
    this.rty = [];
    this.qty = [];
    this.inventoryService.getPrice(product).subscribe(
      res => this.price = res
    )
    this.inventoryService.getSap(product).subscribe(
      sapqty => {
        console.log(sapqty);
        if (sapqty)
        {
              this.rty.push({"name":"Unrestricted","value":+sapqty[0].unrestricted});
              this.rty.push({"name":"Confirm","value":+sapqty[0].confirm});
              this.rty.push({"name":"ATP","value":+sapqty[0].atp});
              if (sapqty[1])
              {
                this.qty.push({"name":sapqty[1].sLoc+"("+sapqty[1].atp.toString()+")","value":+sapqty[1].atp});
              }
              else {
                this.qty.push({"name":"8201"+"("+0+")","value":0});
              }
              if (sapqty[2])
              {
                this.qty.push({"name":sapqty[2].sLoc+"("+sapqty[2].atp.toString()+")","value":+sapqty[2].atp});
              }
              else {
                this.qty.push({"name":"8202"+"("+0+")","value":0});
              }
              if (sapqty[3])
              {
                this.qty.push({"name":sapqty[3].sLoc+"("+sapqty[3].atp.toString()+")","value":+sapqty[3].atp});
              }
              else {
                this.qty.push({"name":"8203"+"("+0+")","value":0});
              }
                this.qty = [...this.qty];
                this.rty = [...this.rty];
                console.log(this.qty);
                console.log(this.rty);
        }
      },
      err => {
        console.log(err);
        this.inventoryService.getPos(product).subscribe(
          posqty => {
            if (posqty){
              console.log('naa');
            }
            else {
              console.log('wa jamo')
            }
          },
          err => {console.log('POS ERROR')},
          () => {console.log('Complete POS')}
        )
      },
      () => {
        console.log('Complete SAP');
        this.inventoryService.getPos(product).subscribe(
          posqty => {
            if (posqty){
              console.log('naa');
            }
            else {
              console.log('wa jamo')
            }
          },
          err => {console.log('POS ERROR')},
          () => {console.log('Complete POS')}
        )
    }
      )
  }
  
}
