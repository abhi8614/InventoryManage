export interface IOrderItem {
    productid: string,
    productname: string,
    priceperitem: number
    qty: number,
    itemtotal: number
}

export interface IOrder {
    items: IOrderItem[],
    total: number
}