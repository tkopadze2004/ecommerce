import { Component, inject } from '@angular/core';
import { orderFacade } from '../../../../facades/order.facade';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { AsyncPipe, CurrencyPipe, DatePipe, JsonPipe } from '@angular/common';
import { OrderItemComponent } from "../../../../components/order-item/order-item.component";
import { KeyValueComponent } from "../../../../components/key-value/key-value.component";
import { OrderPipe } from '../../../../core/pipes/order.pipe';

@Component({
    selector: 'app-order-detail',
    standalone: true,
    templateUrl: './order-detail.component.html',
    styleUrl: './order-detail.component.scss',
    imports: [JsonPipe, AsyncPipe, OrderItemComponent, KeyValueComponent,CurrencyPipe,DatePipe,OrderPipe]
})
export class OrderDetailComponent {
ordefacade=inject(orderFacade)
activatedRoute=inject(ActivatedRoute)

orders$=this.activatedRoute.params.pipe(map(params=>params['id']),
switchMap(id=>this.ordefacade.getOrderByid(id))
)
}
