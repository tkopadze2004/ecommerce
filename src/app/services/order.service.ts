import { Injectable } from '@angular/core';
import { ApiService } from '../core/services';
import { order } from '../core/interfaces.ts/order.interface';

@Injectable({
  providedIn: 'root'
})
export class OrderService extends ApiService {

  getOrders(){
    return this.get('orders.json')
  }
  getOrdersByid(id:string){
    return this.get(`orders/${id}.json`)
  }

  createOrder(order:order){
    return this.post('orders.json',order)
  }
}
