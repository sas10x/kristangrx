import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { of, from} from 'rxjs';
import { concatMap, tap, map, mapTo } from 'rxjs/operators';
import { ProductService } from 'src/app/services/product/product.service';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-woo-update',
  templateUrl: './woo-update.component.html',
  styleUrls: ['./woo-update.component.scss']
})
export class WooUpdateComponent implements OnInit {
  params = {} = {}
  data: any[];
  product: {};
  body: {} = {};
  loading: boolean = true;

  update: any[] = [];

  updateOne = [
    { label: 'Name', value: 'name'},
    { label: 'Description', value: 'description' },
    { label: 'Short Description', value: 'short' },
    { label: 'Brand', value: 'brand' },
    { label: 'Price', value: 'price' },
    { label: 'Barcode', value: 'barcode' }
  ];

  updateName: boolean = false;
  updateDescription: boolean = false;
  updateShortDescription: boolean = false;
  updateBrand: boolean = false;
  updatePrice: boolean = false;
  updateBarcode: boolean = false;

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
 
  // updateProduct() {
  //   console.log('kristan');
  //   from(this.data)
  //   .pipe(tap(() => this.loading = false))
  //   .pipe(concatMap(res => this.getProduct(res)))
  //   .pipe(concatMap(res => this.productService.updateProduct(res[0].id, this.body)))
  //   .subscribe(res => {console.log(res);this.loading = true})
  // }
  // getProduct(product) {
  //   this.body = {
  //     // "name": product.name,
  //     // "description": product.description,
  //     // "short_description": product.description,
  //     "meta_data": [
  //       {
  //           "key": "_wpm_gtin_code",
  //           "value": product.barcode.toString()
  //       }],
  //   }
  //   return this.productService.getProductbySku(product.sku);
  // }
  // test() {
  //   console.log(this.loading);
  //   if (this.loading == true)
  //   {
  //     this.loading = false;
  //   }
  //   else {
  //     this.loading = true
  //   }
  // }

  log(value: any[]): void {
    
    if (value[0].checked == true) {
      this.updateName = true;
    }
    if (value[1].checked) {
      
      this.updateDescription = true;
    }
    if (value[2].checked) {
     
      this.updateShortDescription = true;
    }
    if (value[3].checked) {
     
      this.updateBrand = true;
    } 
    if (value[4].checked) {
     
      this.updatePrice = true;
    }
    if (value[5].checked) {
      
      this.updateBarcode = true;
    }
  }


  updateProducts() {
    from(this.data)
    .pipe(concatMap(res => this.getProductId(res)))
    .pipe(tap(() => {this.update = [
      ...this.update, 
      this.body
      ];console.log(this.update)}))  
    .subscribe(res => {
      console.log(res);
      // console.log(this.body);
    }),
      err => console.error('Observer got an error: ' + err),
      () => {console.log('Observer got a complete notification');console.log(this.update)}
  }

  getProductId(product) {
    // name
    if (this.updateName) {
      let nameobj = {
        "name": product.name
     };
     this.body = {
       ...this.body,
       ...nameobj
     }
     
    }
    // description
    if (this.updateDescription) {
      let descriptionobj = {
        "description": product.description
     };
     this.body = {
      ...this.body,
       ...descriptionobj
     }
    
    }
    // short description
    if (this.updateShortDescription) {
      let shortobj = {
        "short_description": product.description
     };
     this.body = {
      ...this.body,
       ...shortobj
     }
     
    }
    // brand
    if (this.updateBrand) {
      let brandobj = {
        "brand": product.brand
     };
     this.body = {
      ...this.body,
       ...brandobj
     }
    
    }
    // price
    if (this.updatePrice) {
      
      let priceobj = {
        "regular_price": product.price
     };
     this.body = {
      ...this.body,
       ...priceobj
     }
   
    }
    // barcode
    if (this.updateBarcode) {
      let barcodeobj = {
          "meta_data": [
        {
            "key": "_wpm_gtin_code",
            "value": product.barcode.toString()
        }],
     };
     this.body = {
      ...this.body,
       ...barcodeobj
     }
     
    }
    console.log(this.body);
    return this.productService.getProductbySku(product.sku);
  }
  // updateBatch() {
  //   const data = {
  //     update: this.body
  //   };
  //   this.productService.updateBatch(data).subscribe(res => console.log(res));
  // }
}
