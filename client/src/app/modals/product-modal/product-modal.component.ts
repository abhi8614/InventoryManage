import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { IProduct } from 'src/app/_models/product';


@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.css']
})
export class ProductModalComponent implements OnInit {
  @Input() productUpdated = new EventEmitter<IProduct>();
  product: IProduct = {} as IProduct;
  isEdit: boolean = false;
  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }

  saveProduct(product: IProduct) {
    this.productUpdated.emit(product);
    this.bsModalRef.hide();
  }
}
