import { Component, OnInit } from '@angular/core';
import { IProduct } from '../_models/product';
import { ProductService } from '../_service/product.service';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: IProduct[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe(response => {
      this.products =  response;
    })
  }

}
