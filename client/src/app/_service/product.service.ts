import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IProduct } from '../_models/product';
import { map } from 'rxjs/operators';

// const products = [{
//   "id": 1,
//   "name": "Glycerine",
//   "price": 96,
//   "qty": 100,
// }, {
//   "id": 2,
//   "name": "Kiwi",
//   "price": 36,
//   "qty": 200
// }, {
//   "id": 3,
//   "name": "Chocolate Bar - Smarties",
//   "price": 2,
//   "qty": 300
// }, {
//   "id": 4,
//   "name": "Carrots - Jumbo",
//   "price": 68,
//   "qty": 400
// }, {
//   "id": 5,
//   "name": "Coffee - Egg Nog Capuccino",
//   "price": 21,
//   "qty": 500
// }];

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }

  getProducts(){
   return this.http
      .get<IProduct[]>('https://localhost:7177/api/products');
  }
}
