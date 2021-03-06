import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartsRoutingModule } from './carts-routing.module';

import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ngx-ckeditor';

import { CartListComponent } from './cart-list/cart-list.component';


@NgModule({
  declarations: [
    CartListComponent
  ],
  imports: [
    CommonModule,
    CartsRoutingModule,
    CKEditorModule,
    FormsModule,
  ]
})
export class CartsModule { }
