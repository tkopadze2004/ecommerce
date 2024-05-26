import { Component, inject } from '@angular/core';
import { OrderItemComponent } from '../../../components/order-item/order-item.component';
import { orderFacade } from '../../../facades/order.facade';
import { AsyncPipe, CurrencyPipe, DatePipe } from '@angular/common';
import { OrderPipe } from '../../../core/pipes/order.pipe';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../../ui/button/button.component';

@Component({
  selector: 'app-orders',
  standalone: true,
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss', '../../profile/profile.style.scss'],
  imports: [
    OrderItemComponent,
    AsyncPipe,
    DatePipe,
    CurrencyPipe,
    OrderPipe,
    RouterLink,
    ButtonComponent,
  ],
})
export class OrdersComponent {
  orderfacade = inject(orderFacade);
  orders$ = this.orderfacade.getOrders();
}
