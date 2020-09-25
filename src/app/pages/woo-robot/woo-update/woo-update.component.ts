import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { of, from} from 'rxjs';
import { concatMap, tap, map, mapTo, switchMap } from 'rxjs/operators';
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
  loading: boolean = false;

  variable: any[] = [];

  update: any[] = [];

  updateOne = [
    { label: 'Name', value: 'name'},
    { label: 'Description', value: 'description' },
    { label: 'Short Description', value: 'short' },
    { label: 'Brands', value: 'brands' },
    { label: 'Price', value: 'price' },
    { label: 'Barcode', value: 'barcode' },
    { label: 'Categories', value: 'categories' }
  ];

  updateName: boolean = false;
  updateDescription: boolean = false;
  updateShortDescription: boolean = false;
  updateBrand: boolean = false;
  updatePrice: boolean = false;
  updateBarcode: boolean = false;
  updateCategories: boolean = false;

constructor(private productService: ProductService) {}
  ngOnInit() {

}
  onFileChange(ev) {
    console.log('onfileChange');
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
        console.log('kristan');
        console.log(this.data)
        console.log('kristan');
        return initial;
      }, {});
    }
    reader.readAsBinaryString(file);
  }

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
    if (value[6].checked) {
      
      this.updateCategories = true;
    }
  }


  updateProducts() {
    this.loading = true;
    from(this.data)
    .pipe(concatMap(res => this.getProductId(res)))
    .subscribe(res => {
      if (res && res.length)
      {
        if ((res[0].parent_id) == 0)
        {
          console.log(res[0].parent_id);
          var tmpId = {id:res[0].id};
          var tmpBody = {...tmpId, ...this.body }
          this.update = [
          ...this.update, 
          tmpBody
          ];
          console.log(res[0].sku);
          console.log(this.update);
        }
        else {
          var tmpVariable = {id: res[0].id, sku: res[0].sku, parent_id: res[0].parent_id}
          this.variable = [
            ...this.variable,
            tmpVariable
          ]
        }
      }
    },
      err => console.error('Observer got an error: ' + err),
      () => {console.log('Observer got a complete notification');
      this.updateBatch();
      this.loading = false;
      console.log(this.variable);
      console.table(this.variable);
    })
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
        "brands": product.brand
     };
     this.body = {
      ...this.body,
       ...brandobj
     }
    
    }
    // price
    if (this.updatePrice) {
      
      let priceobj = {
        "sale_price": product.price,
        "date_on_sale_from": "2020-09-15T00:00:00",
        "date_on_sale_from_gmt": "2020-09-14T16:00:00",
        "date_on_sale_to": "2020-10-31T23:59:59",
        "date_on_sale_to_gmt": "2020-10-31T15:59:59",
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
    if (this.updateCategories) {
      
      let categoriesobj = {
        "categories": [
          {
            "id": product.categories
          }
        ]
     };
     this.body = {
      ...this.body,
       ...categoriesobj
     }
    }
    console.log('inside getProduct');
    console.log(this.body);
    return this.productService.getProductbySku(product.sku);
  }
  updateBatch() {
    const data = {
      update: this.update
    };
    this.productService.updateBatch(data).subscribe(res => console.log(res));
  }
}
