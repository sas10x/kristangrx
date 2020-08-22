import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { of, from} from 'rxjs';
import { concatMap, tap, map, mapTo } from 'rxjs/operators';
import { ProductService } from 'src/app/services/product/product.service';


@Component({
  selector: 'app-woo-list',
  templateUrl: './woo-list.component.html',
  styleUrls: ['./woo-list.component.scss']
})
export class WooListComponent implements OnInit {
  params = {} = {}
  data: any[];
  product: {};
  body: {};
  loading: boolean = true;
  
constructor(private productService: ProductService) {}
  ngOnInit() {

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
 
  updateBrand() {
    console.log('kristan');
    from(this.data)
    .pipe(tap(() => this.loading = false))
    .pipe(concatMap(res => this.getProduct(res)))
    .pipe(concatMap(res => this.productService.updateProduct(res[0].id, this.body)))
    .subscribe(res => {console.log(res);this.loading = true})
  }
  getProduct(product) {
    this.body = {
      "name": product.name,
      "description": product.description,
      "short_description": product.description
    }
    return this.productService.getProductbySku(product.sku);
  }
  test() {
    console.log(this.loading);
    if (this.loading == true)
    {
      this.loading = false;
    }
    else {
      this.loading = true
    }
  }
}
