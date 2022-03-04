import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ProductComponent } from './product/product.component';
import { OrderComponent } from './order/order.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductModalComponent } from './modals/product-modal/product-modal.component';
import { ConfirmDialogComponent } from './modals/confirm-dialog/confirm-dialog.component';
import { ModalModule } from 'ngx-bootstrap/modal';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProductComponent,
    OrderComponent,
    ProductModalComponent,
    ConfirmDialogComponent
  ],
  imports: [
    ModalModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
