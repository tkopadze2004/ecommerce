import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Products } from '../../core/interfaces.ts/products';
import { CurrencyPipe, NgStyle } from '@angular/common';
import { QuantityInputComponent } from '../quantity-input/quantity-input.component';
import { ButtonComponent } from '../../ui/button/button.component';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss',
  imports: [CurrencyPipe, QuantityInputComponent, ButtonComponent],
})
export class CartItemComponent {
  @Input() product: Products = {} as Products;
  @Output() remove: EventEmitter<Products> = new EventEmitter<Products>();
  @Output() update: EventEmitter<{
    product: Products;
    quantity: number;
  }> = new EventEmitter<{
    product: Products;
    quantity: number;
  }>();


}
