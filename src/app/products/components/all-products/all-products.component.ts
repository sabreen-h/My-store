import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  products:Product[]=[];
  categories:any[]=[];
  loading:boolean=false;
  cartProducts:any[]=[]


  constructor(private service:ProductsService) { }

  ngOnInit(): void {
    this.getProducts()
    this.getCategories()
  }

  getProducts(){
    this.service.getAllProducts().subscribe((res:any) => {
      this.products= res
      console.log(res)

    })
  }

  getCategories(){

    this.service.getAllCategories().subscribe((res:any) =>{
      this.categories=res

      console.log(res)
    }, error =>{
      alert(error)
    }
    
    )
  }

  filterCategory(event:any){
    let value = event.target.value;
    if (value=="all"){
      this.getProducts()
    }else{
      this.getProductsCategories(value)
    }
    this.getProductsCategories(value)
  }

  getProductsCategories(keyword:string){
    this.service.getProductsByCategories(keyword).subscribe((res:any) =>{
      this.products =res

    })
  }

  addToCart(event:any){
    if("cart"  in localStorage){
      this.cartProducts=JSON.parse(localStorage.getItem("cart")!)
      let exist=this.cartProducts.find(item => item.item.id ==event.item.id)
      if(exist) {
        alert("product is aready in your cart")
      }else{
        this.cartProducts.push(event)
        localStorage.setItem("cart", JSON.stringify(this.cartProducts))
  
      }
     
    }else{
      this.cartProducts.push(event)
      localStorage.setItem("cart", JSON.stringify(this.cartProducts))
    }
  }

}
