import { Billing } from './billing';
import { Shipping } from './shipping';
import { Meta } from '@angular/platform-browser';

export interface Customer {
    id:number,
    date_created:string,
    date_created_gmt:string,
    date_modified:string,
    date_modified_gmt:string,
    email:string,
    first_name:string,
    last_name:string,
    role:string,
    username:string,
    password:string,
    billing	:Billing,
    shipping:Shipping,
    is_paying_customer:boolean,
    avatar_url:string,	
    meta_data:Meta[]
}