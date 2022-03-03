import { Component, OnInit } from '@angular/core';
import { IOrder, IOrderItem } from '../_models/order';
import { IProduct } from '../_models/product';
import { OrderService } from '../_service/order.service';


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

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  products: IProduct[] = [];
  order: IOrder = { items: [], total: 0 };
  constructor(private oderService: OrderService) { }

  ngOnInit(): void {
    this.oderService.getProducts().subscribe(response => {
      this.products =  response;
    })
  }
  changeItemQty(item: IOrderItem) {
    var index = this.order.items.map(function (e) { return e.productid }).indexOf(item.productid);
    if (index > -1) {
      var item = this.order.items[index];
      item.itemtotal = item.priceperitem * item.qty;
      this.order.items.splice(index, 1, item);
      this.updateOrderTotalCost();
    }
  }

  addToOrder(product: IProduct) {
    var index = this.order.items.map(function (e) { return e.productid }).indexOf(product.id);
    if (index > -1) {
      alert("Product already exist in Order");
      return;
    }
    var item: IOrderItem = { productid: product.id, productname: product.name, priceperitem: product.sellPrice, qty: 1, itemtotal: product.sellPrice * 1 };
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

  deleteOrderItem(orderItem: IOrderItem) {
    var index = this.order.items.map(function (e) { return e.productid }).indexOf(orderItem.productid);
    if (index > -1) {
      this.order.items.splice(index, 1);
    }
    this.updateOrderTotalCost();
  }
}
