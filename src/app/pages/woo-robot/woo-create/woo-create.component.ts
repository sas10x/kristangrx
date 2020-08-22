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

  constructor(private productService: ProductService) { }

  ngOnInit() {

  }

  runCreate() {
    from(this.data)
    .pipe(concatMap(res => this.createProduct(res)))
    .subscribe(res => console.log(res))
  }
  createProduct(product) {
    let body = {
      "sku": product.sku.toString(),
      "ean_code": product.barcode.toString(),
      "name": product.name.toString(),
      "type": "simple",
      "regular_price": product.price.toString(),
      "description": product.description.toString(),
      "short_description": product.description.toString(),
      "categories":
      [
        {
            "id": 485,
            "name": "Casters Fixed and Swivel",
            "slug": "casters-fixed-and-swivel"
        }
      ],
    }
    return this.productService.createProduct(body);
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
}
