import { Component, inject } from '@angular/core';
import { AuthHeadComponent } from '../../auth/auth-head/auth-head.component';
import { KeyValueComponent } from '../../../components/key-value/key-value.component';
import { CartFacade } from '../../../facades/cart.facade';
import { map } from 'rxjs';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { ButtonComponent } from '../../../ui/button/button.component';
import { Router, RouterLink } from '@angular/router';
import { CartItemComponent } from '../../../components/cart-item/cart-item.component';
import { Products } from '../../../core/interfaces.ts/products';

@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  imports: [
    AuthHeadComponent,
    KeyValueComponent,
    AsyncPipe,
    CurrencyPipe,
    ButtonComponent,
    RouterLink,
    CartItemComponent,
  ],
})
export class CartComponent {
  cartFacade = inject(CartFacade);
  router = inject(Router);
  carts$ = this.cartFacade.cart$;

  sum$ = this.cartFacade.cart$.pipe(
    map((cart) =>
      cart
        .filter((item) => item?.quantity && item.quantity > 0)
        .reduce((acc, item: any) => acc + +item?.quantity * +item.price, 0)
    )
  );

  checkout() {
    this.router.navigate(['/profile/checkout']);
  }
  updateCart($event: { product: Products; quantity: number }) {
    this.cartFacade.UpdateToCart($event.product, $event.quantity);
  }
  removeFromCart($event: Products) {
    this.cartFacade.DeleteCart($event);
  }
}
