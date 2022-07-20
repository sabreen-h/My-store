import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CartComponent } from './components/cart/cart.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component';
import { OrderComponent } from './components/order/order.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';





@NgModule({
  declarations: [
    CartComponent,
    DialogComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    MatDialogModule,
    RouterModule,
    ReactiveFormsModule,
    MatFormFieldModule,
  
    
   
    
    
    
  ],
  exports:[
    FormsModule,
    OrderComponent,
    DialogComponent,
  ]
})
export class CartsModule { }
