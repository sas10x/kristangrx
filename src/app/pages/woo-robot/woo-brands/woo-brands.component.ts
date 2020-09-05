import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { onErrorResumeNext, from, pipe, Observable, of, throwError, iif, EMPTY} from 'rxjs';
import { concatMap, tap, catchError, finalize, map} from 'rxjs/operators';
import { ProductService } from 'src/app/services/product/product.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-woo-brands',
  templateUrl: './woo-brands.component.html',
  styleUrls: ['./woo-brands.component.scss']
})
export class WooBrandsComponent implements OnInit {

  params = {} = {}
  data: any[];
  update: any[] = [];
  body: {};
  barcode:string;
  brand:string;
  loading: boolean = true;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
  }
  onFileChange(ev) {
    let workBook = null;
    let jsonData = null;
    const reader = new FileReader();
    const file = ev.target.files[0];
    reader.onload = (event) => {
      const data = reader.result;
      workBook = XLSX.read(data, { type: 'binary' });
      jsonData = workBook.SheetNames.reduce((initial, name) => {
        const sheet = workBook.Sheets[name];
        initial[name] = XLSX.utils.sheet_to_json(sheet);
        // console.log(initial[name]);
        this.data = (initial[name]);
        console.log(this.data)
        return initial;
      }, {});
    }
    reader.readAsBinaryString(file);
  }
  updateBarcode() {
    console.log('kristan');

    from(this.data)
    .pipe(concatMap(res => this.getProduct(res)))
    .pipe(tap(() => {this.loading = false}))  
    .subscribe(res => 
      {
        this.loading = true;
        if (res && res.length) {
          var tmpCart = {"id":res[0].id, "meta_data": [
            {
                "key": "_wpm_gtin_code",
                "value": this.barcode.toString()
            }]};
          this.update = [
            ...this.update, 
            tmpCart
            ];
          console.log(this.update);
        }
      }),
      err => console.error('Observer got an error: ' + err),
      () => console.log('Observer got a complete notification')
  }
  
  updateBatch() {
    const data = {
      update: this.update
    };
    this.productService.updateBatch(data).subscribe(res => console.log(res));
  }
  getProduct(product) {
    // this.body = {
    //   "brands": "616"
    // }

    // update gtin
    // this.barcode = product.barcode;

    this.brand = product.brand;
    return this.productService.getProductbySku(product.sku);
  }

  updateBrand() {
    console.log('kristan');

    from(this.data)
    .pipe(concatMap(res => this.getProduct(res)))
    .pipe(tap(() => {this.loading = false}))  
    .subscribe(res => 
      {
        this.loading = true;
        if (res && res.length) {
          var tmpCart = {"id":res[0].id, "brands": this.brand.toString()};
          this.update = [
            ...this.update, 
            tmpCart
            ];
          console.log(this.update);
        }
      }),
      err => console.error('Observer got an error: ' + err),
      () => console.log('Observer got a complete notification')
  }
}
