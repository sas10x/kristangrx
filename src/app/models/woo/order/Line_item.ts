import { Meta } from './Meta';
import { Tax } from './Tax';

export interface Line_items {
    id:number,
    name:string,
    product_id:number,
    variation_id:number,
    quantity:number,
    tax_class:string,
    subtotal:string,
    subtotal_tax:string,
    total:string,
    total_tax:string,
    taxes:Tax[],
    meta_data:Meta[],
    sku:string
    price:string,
}