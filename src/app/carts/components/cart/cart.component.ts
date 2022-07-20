import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartsService } from '../../services/carts.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts:any []=[];
  total:any=0;
  success:boolean=false
 
  constructor(private service:CartsService , public dialog:MatDialog) { }

  ngOnInit(): void {
    this.getCartProducts()
   
  }

  getCartProducts(){
    if("cart"  in localStorage){
      this.cartProducts=JSON.parse(localStorage.getItem("cart")!)
  }
  this.getCartTotal()

 
}

detectChange(){
  this.getCartTotal()
  localStorage.setItem("cart", JSON.stringify(this.cartProducts))

}

getCartTotal(){
  this.total=0
  for(let x in this.cartProducts){
    this.total+=this.cartProducts[x].item.price * this.cartProducts[x].quantity;
  }
}

deleteProduct(index:number){
  this.cartProducts.splice(index,1)
  this.getCartTotal()
  localStorage.setItem("cart", JSON.stringify(this.cartProducts))


}

clrearCart(){
  this.cartProducts=[]
  this.getCartTotal()
  localStorage.setItem("cart", JSON.stringify(this.cartProducts))

}



minsAmount(index:number){
  this.cartProducts[index].quantity--
  this.getCartTotal()
  localStorage.setItem("cart", JSON.stringify(this.cartProducts))


}

addAmount(index:number){
 this.cartProducts[index].quantity++
 this.getCartTotal()
 localStorage.setItem("cart", JSON.stringify(this.cartProducts))

}



openDialog(){
  this.dialog.open(DialogComponent);
}

}
