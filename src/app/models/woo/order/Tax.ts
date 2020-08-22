import { Meta } from './Meta';

export interface Tax {
    id	:number,
    rate_code:string,
    rate_id:string,
    label:string,
    compound:boolean,
    tax_total:string,
    shipping_tax_total:string,
    meta_data:Meta[],
}