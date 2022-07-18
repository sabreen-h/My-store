import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

import {MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './spinner/spinner.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';







@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    FormsModule,
  ],
  exports:[
    HeaderComponent,
    SpinnerComponent,
    FormsModule,
   
  ]
})
export class SharedModule { }
