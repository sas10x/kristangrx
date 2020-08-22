import { Billing } from './Billing'
import { Shipping } from './Shipping'
import { Tax_lines } from './Tax_lines'
import { Shipping_lines } from './Shipping_lines'
import { Fee } from './Fee'
import { Coupon } from './Coupon'
import { Meta } from './Meta'
import { Line_items } from './Line_item'
import { Refund } from './Refund'

export interface Order {
    id:number,
    parent_id:number,
    number:string,
    order_key:string,
    created_via:string,
    version:string,
    status:string,
    currency:string,
    date_created:string,
    date_created_gmt:string,
    date_modified:string,
    date_modified_gmt:string,
    discount_total:string,
    discount_tax:string,
    shipping_total:string,
    shipping_tax:string,
    cart_tax:string,
    total:string,
    total_tax:string,
    prices_include_tax:boolean,
    customer_id:number,
    customer_ip_address:string,
    customer_user_agent:string,
    customer_note:string,
    billing:Billing
    shipping:Shipping 
    payment_method:string,
    payment_method_title:string,
    transaction_id:string,
    date_paid:string,
    date_paid_gmt:string,
    date_completed:string,
    date_completed_gmt:string,
    cart_hash:string,
    meta_data:Meta[],
    line_items:Line_items[],
    tax_lines:Tax_lines[],
    shipping_lines:Shipping_lines,
    fee_lines:Fee[],
    coupon_lines:Coupon[],
    refunds:Refund[],
    set_paid:boolean,
}