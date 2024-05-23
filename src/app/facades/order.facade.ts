import { Injectable, inject } from "@angular/core";
import { OrderService } from "../services/order.service";
import { order } from "../core/interfaces.ts/order.interface";

@Injectable({ providedIn: 'root' })


export class orderFacade{

  orderService=inject(OrderService)

  getOrders(){
return this.orderService.getOrders()
  }
   getOrderByid (id:string){
return this.orderService.getOrdersByid(id)
   }

   createOrder(order:order){
    return this.orderService.createOrder(order)
   }
}
