import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/woo/customer/customer';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { NzTableQueryParams } from 'ng-zorro-antd/table';

@Component({
  selector: 'app-woo-customers',
  templateUrl: './woo-customers.component.html',
  styleUrls: ['./woo-customers.component.scss']
})
export class WooCustomersComponent implements OnInit {
  loading = true;
  pageSize = 10;
  pageIndex = 1;
  total : number = 1;
  customers: Customer[];
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    let params = {
      "orderby": "registered_date",
      "order": "desc"
    }
    this.customerService.getCustomers(params).subscribe(
      res => {this.total = parseInt(res.headers.get('X-WP-Total'));this.customers = res.body;this.loading = false;}
    )
  }
  onQueryParamsChange(params: NzTableQueryParams): void {
    this.loading = true;
    let wooparams = {
      "page": params.pageIndex,
      "per_page": params.pageSize,
      "orderby": "registered_date",
      "order": "desc"
    }
    this.customerService.getCustomers(wooparams).subscribe(
      res => {this.total = parseInt(res.headers.get('X-WP-Total'));this.customers = res.body;this.loading = false}
    )
  }

}
