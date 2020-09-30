import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { from } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-woo-create',
  templateUrl: './woo-create.component.html',
  styleUrls: ['./woo-create.component.scss']
})
export class WooCreateComponent implements OnInit {
  data: any[];
  create: any[] = [];
  loading: boolean = false;

  constructor(private productService: ProductService) { }

  ngOnInit() {

  }
  runCreate() {
    this.loading = true;
    from(this.data)
    .pipe(concatMap(res => this.createProduct(res)))
    .subscribe(res => 
      {
        console.log(res)
      },
      err => console.error('Observer got an error: ' + err),
      () => {console.log('Observer got a complete notification');console.log(this.create);this.loading = false;this.batchCreate()}
  )}
  createProduct(product) {
    let body = {
      "sku": product.sku.toString(),
      "name": product.name.toString(),
      "type": "simple",
      "regular_price": product.price.toString(),
      // "sale_price": product.sale.toString(),
      "description": product.description.toString(),
      "short_description": product.description.toString(),
      // "brands": product.brand.toString(),
      // "meta_data": [
      //   {
      //       "key": "_wpm_gtin_code",
      //       "value": product.barcode.toString()
      //   }],
      "categories": [
        {
            id: product.categories.toString()
        }]
    }
    this.create = [...this.create, body];
    return this.create;
  }
  batchCreate() {
      const data = {
        "create": this.create
      };
      this.productService.createBatch(data).subscribe(res => console.log(res));
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
  runCreateVariable() {
    this.loading = true;
    from(this.data)
    .pipe(concatMap(res => this.createVariable(res)))
    .subscribe(res => 
      {
        console.log(res)
      },
      err => console.error('Observer got an error: ' + err),
      () => {console.log('Observer got a complete notification');this.loading = false;}
  )}
  createVariable(product) {
    let body = {
      "sku": product.sku.toString(),
      "regular_price": product.price.toString(),
      // "sale_price": product.sale.toString(),
      "description": product.description.toString(),
      // "short_description": product.description.toString(),
      // "meta_data": [
      //   {
      //       "key": "_wpm_gtin_code",
      //       "value": product.barcode.toString()
      //   }],
      //   "attributes": [
      //     {
      //         "id": 1,
      //         "name": "Color",
      //         "option": product.option.toString()
      //     }
      // ]
    }
    return this.productService.createProductVariation(product.parent, body);
  }
}
