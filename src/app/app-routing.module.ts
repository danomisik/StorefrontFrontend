import { NgModule } from '@angular/core';
import { CartComponent } from "./cart/cart.component";
import { ConfirmationComponent } from "./confirmation/confirmation.component";
import { ProductListComponent } from "./product-list/product-list.component";
import {Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'cart/confirmation', component: ConfirmationComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
