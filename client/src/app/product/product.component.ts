import { Component, OnInit } from '@angular/core';

interface IProduct {
  id: number,
  name: string,
  price: number,
  qty: number
}

const products = [{
  "id": 1,
  "name": "Glycerine",
  "price": 96,
  "qty": 100,
}, {
  "id": 2,
  "name": "Kiwi",
  "price": 36,
  "qty": 200
}, {
  "id": 3,
  "name": "Chocolate Bar - Smarties",
  "price": 2,
  "qty": 300
}, {
  "id": 4,
  "name": "Carrots - Jumbo",
  "price": 68,
  "qty": 400
}, {
  "id": 5,
  "name": "Coffee - Egg Nog Capuccino",
  "price": 21,
  "qty": 500
}];

interface IOrderItem {
  productid: number,
  productname: string,
  priceperitem: number
  qty: number,
  itemtotal: number
}

interface IOrder {
  items: IOrderItem[],
  total: number
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: IProduct[] = products;
  order: IOrder = { items: [], total: 0};
  constructor() { }

  ngOnInit(): void {
  }

  changeItemQty(item: IOrderItem){
    var index = this.order.items.map(function(e) { return e.productid}).indexOf(item.productid);
    if(index > -1){
      var item = this.order.items[index];
      item.itemtotal = item.priceperitem * item.qty;
      this.order.items.splice(index,1 , item);
      this.updateOrderTotalCost();
    }
  }

  addToOrder(product: IProduct) {
    var index = this.order.items.map(function (e) { return e.productid }).indexOf(product.id);
    if (index > -1) {
      alert("Product already exist in Order");
      return;
    }
    var item: IOrderItem = { productid: product.id, productname: product.name, priceperitem: product.price, qty: 1, itemtotal: product.price * 1 };
    this.order.items.push(item);
    this.updateOrderTotalCost();
  }

  updateOrderTotalCost() {
    var sum = 0;
    for (let index = 0; index < this.order.items.length; index++) {
      sum += this.order.items[index].itemtotal;
    }
    this.order.total = sum;
  }
}
