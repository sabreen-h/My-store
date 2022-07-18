import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CartComponent } from './components/cart/cart.component';



@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
   
    
    
    
  ],
  exports:[
    FormsModule,
  ]
})
export class CartsModule { }
