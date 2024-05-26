import { Injectable, inject } from '@angular/core';
import { OrderService } from '../services/order.service';
import { order } from '../core/interfaces.ts/order.interface';
import { AuthFacade } from './auth.facade';
import { map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class orderFacade {
  orderService = inject(OrderService);
  authFacade = inject(AuthFacade);
  getOrders() {
    return this.orderService.getOrders(this.authFacade.user.id).pipe(
      map((order) => {
        return Object.keys(order).map(
          (key: any) =>
            ({
              ...order[key],
              id: key,
            } as order)
        );
      })
    );
  }
  getOrderByid(id: string) {
    return this.orderService.getOrdersByid(id).pipe(
      map(
        (order) =>
          ({
            ...order,
            id,
          } as order)
      )
    );
  }

  createOrder(order: order) {
    return this.orderService.createOrder(order);
  }
}
