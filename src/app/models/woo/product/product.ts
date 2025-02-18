
import { Meta } from '@angular/platform-browser';
import { Dimension } from './dimension';
import { Category } from './category';
import { Tag } from './tag';
import { Image } from './image';
import { Default } from './default';
import { Attribute } from './attribute';

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
    downloads : any[],
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
    // List of related products IDs.
    related_ids : any[],
    // List of up-sell products IDs.
    upsell_ids : any[],
    // List of cross-sell products IDs.
    cross_sell_ids : any[],
    parent_id : number,
    purchase_note : string,
    categories : Category[],
    tags : Tag[],
    images : Image[],
    attributes : Attribute[],
    default_attributes : Default[],
    // List of variations IDs.
    variations : any[],
    // List of grouped products ID.
    grouped_products: any[],
    menu_order : number,
    meta_data : Meta[],
}