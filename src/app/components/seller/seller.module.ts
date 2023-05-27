import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerRoutingModule } from './seller-routing.module';

import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SellerSignUpComponent } from './seller-sign-up/seller-sign-up.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    SellerHomeComponent,
    SellerSignUpComponent
  ],
  imports: [
    CommonModule,
    SellerRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class SellerModule { }
