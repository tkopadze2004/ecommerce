import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Products } from '../../core/interfaces.ts/products';
import { QuantityInputComponent } from "../quantity-input/quantity-input.component";
import { CurrencyPipe, DatePipe } from '@angular/common';
import { order } from '../../core/interfaces.ts/order.interface';

@Component({
    selector: 'app-order-item',
    standalone: true,
    templateUrl: './order-item.component.html',
    styleUrl: './order-item.component.scss',
    imports: [QuantityInputComponent,CurrencyPipe,DatePipe]
})
export class OrderItemComponent {

  @Input() product: Products = {} as Products;

}
