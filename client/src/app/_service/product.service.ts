import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IProduct } from '../_models/product';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http
      .get<IProduct[]>('https://localhost:7177/api/products');
  }

  addProduct(product: IProduct) {
    return this.http
      .post<IProduct>('https://localhost:7177/api/products/add', product);
  }

  updateProduct(product: IProduct) {
    return this.http
      .put<IProduct>('https://localhost:7177/api/products/update', product)
  }
}
