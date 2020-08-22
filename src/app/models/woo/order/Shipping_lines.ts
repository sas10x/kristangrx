import { Tax } from './Tax';
import { Meta } from './Meta';

export interface Shipping_lines {
    id:number,
    method_title:string,
    method_id:string,
    total:string,
    total_tax:string,
    taxes:Tax[],
    meta_data:Meta[],
}