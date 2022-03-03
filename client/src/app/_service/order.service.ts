import { Injectable } from '@angular/core';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private productService: ProductService) { }

  getProducts() {
    return this.productService.getProducts();
  }

}
