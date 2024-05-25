import { Injectable } from '@angular/core';
import { ApiService } from '../core/services';
import { order } from '../core/interfaces.ts/order.interface';
import { FirebaseDocument } from '../core/interfaces.ts/firebase-document';

@Injectable({
  providedIn: 'root'
})
export class OrderService extends ApiService {

  getOrders(userId:string){
    return this.get<FirebaseDocument<order>[]>('orders.json',{orderBy:'"userId"',equalTo:`"${userId}"`})
  }
  getOrdersByid(id:string){
    return this.get<FirebaseDocument<order>>(`orders/${id}.json`)
  }

  createOrder(order:order){
    return this.post('orders.json',order)
  }
}
