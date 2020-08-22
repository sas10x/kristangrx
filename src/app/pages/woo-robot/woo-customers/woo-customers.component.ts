import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/woo/customer/customer';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { resetFakeAsyncZone } from '@angular/core/testing';

@Component({
  selector: 'app-woo-customers',
  templateUrl: './woo-customers.component.html',
  styleUrls: ['./woo-customers.component.scss']
})
export class WooCustomersComponent implements OnInit {

  customers: Customer[];
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    let params = { page: 2 }
    this.customerService.getCustomers(params).subscribe(
      res => {this.customers = res;console.log(res)}
    )
  }

}
