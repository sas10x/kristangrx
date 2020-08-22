import { Meta } from './Meta';

export interface Coupon {
    id:number,
    code:string,
    discount:string,
    discount_tax:string,
    meta_data: Meta[]
}