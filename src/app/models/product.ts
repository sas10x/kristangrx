
import { Download } from './woo/product/download';
import { Dimension } from './woo/product/dimension';
import { Category } from './woo/product/category';
import { Tag } from './woo/product/tag';
import { Image } from './woo/product/image';
import { Attribute } from './woo/product/attribute';
import { Meta } from './woo/product/meta';


export interface Product {
    id : number,
    name : string,
    slug : string,
    permalink : string,
    date_created : string,
    date_created_gmt : string,
    date_modified : string,
    date_modified_gmt : string,
    type : string,
    status : string,
    featured : boolean	,
    catalog_visibility : string,
    description : string,
    short_description : string,
    sku : string,
    price : string,
    regular_price : string,
    sale_price : string,
    date_on_sale_from : string,
    date_on_sale_from_gmt : string,
    date_on_sale_to : string,
    date_on_sale_to_gmt : string,
    price_html : string,
    on_sale : boolean,
    purchasable : boolean,
    total_sales : number,
    virtual : boolean,
    downloadable : boolean,
    downloads : Download[],
    download_limit : number,
    download_expiry : number,
    external_url : string,
    button_text : string,
    tax_status : string,
    tax_class : string,
    manage_stock : boolean,
    stock_quantity : number,
    stock_status : string,
    backorders : string,
    backorders_allowed : boolean,
    backordered	: boolean,
    sold_individually : boolean,
    weight : string,
    dimensions : Dimension,
    shipping_required : boolean,
    shipping_taxable : boolean,
    shipping_class : string,
    shipping_class_id : number,
    reviews_allowed : boolean,
    average_rating : string,
    rating_count : number,
    related_ids : any[],
    upsell_ids : any[],
    cross_sell_ids : any[],
    parent_id : number,
    purchase_note : string,
    categories : Category[],
    tags : Tag[],
    images : Image[],
    attributes : Attribute[],
    default_attributes : any[],
    variations : any[],
    grouped_products: any[],
    menu_order : number,
    meta_data : Meta[],
}