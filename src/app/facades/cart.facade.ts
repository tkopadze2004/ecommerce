import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Products } from '../core/interfaces.ts/products';

@Injectable({
  providedIn: 'root',
})
export class CartFacade {
  cart = new BehaviorSubject<Products[]> ([]);
  cart$ = this.cart.asObservable();

get allProducts(){
  return this.cart.getValue()
}

  cartFee=0.18
  constructor(){
    this.cart.next(this.getFromLocalStorage())
  }

  setToLocalStorage(cart: any) {
    localStorage.setItem('cart', JSON.stringify(cart));
    this.cart.next(cart)
  }

  getFromLocalStorage() {
    return JSON.parse(localStorage.getItem('cart') || '[]');
  }

  addToCart(product: any, quantity:number = 1) {
    const cart=this.getFromLocalStorage()

    if(cart.find((item:any)=> item.id===product.id)){
      this.UpdateToCart(product,quantity)
      return
    } this.setToLocalStorage([...cart,product])
  }

  DeleteCart(product: any) {
    const cart=this.getFromLocalStorage()
    this.setToLocalStorage(cart.filter((item:any)=> item.id !==product.id))
  }

  UpdateToCart(product: any, quantity = 1) {
    const cart=this.getFromLocalStorage()
const updatecart=cart.map((item:any)=>{
  if(item.id===product.id){
    return{
      ...item,
      quantity:quantity
    }
  } return item
})
this.setToLocalStorage(updatecart)
  }
}
