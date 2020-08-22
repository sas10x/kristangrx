import { Tax } from './Tax';
import { Meta } from './Meta';

export interface Fee {
    id:number,
    name:string,
    tax_class:string,
    tax_status:string,
    total:string,
    total_tax:string,
    taxes:Tax[],
    meta_data:Meta[],
}