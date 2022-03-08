import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { ProductModalComponent } from '../modals/product-modal/product-modal.component';
import { IProduct } from '../_models/product';
import { ProductService } from '../_service/product.service';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: IProduct[] = [];
  isEdit: boolean = true;

  constructor(public bsModalRef: BsModalRef, private productService: ProductService, private modalService: BsModalService, 
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe(response => {
      this.products = response;
    })
  }

  openAddProductModal() {
    let product: IProduct = {} as IProduct;
    this.isEdit = false;
    this.openEditProductModal(product)
  }

  openEditProductModal(product: IProduct) {
    const config = {
      class: 'modal-dialog-centered',
      initialState: {
        product: JSON.parse(JSON.stringify(product)) as IProduct,
        isEdit: this.isEdit
      }
    }
    this.bsModalRef = this.modalService.show(ProductModalComponent, config);
    this.bsModalRef.content.productUpdated.subscribe(response => {
      this.saveProduct(response as IProduct).subscribe({
        next: data => {
          this.isEdit = true;
          this.loadProducts();
        },
        error: error => {
          this.toastr.error(error.error)
          console.error('There was an error!', error);
        }
      });
    })
  }

  saveProduct(product: IProduct) {
    return this.isEdit ? this.productService.updateProduct(product) : this.productService.addProduct(product);
  }
}
