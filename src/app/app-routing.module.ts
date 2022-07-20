import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './carts/components/cart/cart.component';
import { DialogComponent } from './carts/components/dialog/dialog.component';
import { OrderComponent } from './carts/components/order/order.component';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';

const routes: Routes = [

  {path:"products" , component:AllProductsComponent},
  {path:"details/:id" , component:ProductsDetailsComponent},
  {path:"cart" , component:CartComponent},
  {path:"order" , component:OrderComponent},
  {path:"dialog" , component:DialogComponent},
  {path:"**" , redirectTo:"products",pathMatch:"full"},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
