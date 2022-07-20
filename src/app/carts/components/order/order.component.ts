import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , Validators } from '@angular/forms';
import { CartsService } from '../../services/carts.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  success:boolean=false
  cartProducts:any []=[];


  constructor(private service:CartsService) { }

  ngOnInit(): void {
    
  }

  onSubmit(f: any){
    console.log(f)
  }

  addCart(){
    let Products=this.cartProducts.map(item =>{
      return {productId:item.item.id , quantity:item.quantity}
    })
    let Model= {
      userId:5,
      date:new Date(),
      products: Products
    }
    this.service.createNewCart(Model).subscribe((res:any) =>{
    this.success=true
  })
  console.log(Model)

  
}
 
}
