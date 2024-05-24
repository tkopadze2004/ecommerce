import { Component, OnDestroy, inject } from '@angular/core';
import { AuthHeadComponent } from '../../auth/auth-head/auth-head.component';
import { CartItemComponent } from '../../../components/cart-item/cart-item.component';
import { KeyValueComponent } from '../../../components/key-value/key-value.component';
import { CartFacade } from '../../../facades/cart.facade';
import { Observable, Subject, map, takeUntil, tap } from 'rxjs';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { ButtonComponent } from '../../../ui/button/button.component';
import { Router, RouterLink } from '@angular/router';
import { InputComponent } from '../../../input/input.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { orderFacade } from '../../../facades/order.facade';
import { AuthFacade } from '../../../facades';
import { order } from '../../../core/interfaces.ts/order.interface';

@Component({
  selector: 'app-checkout',
  standalone: true,
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
  imports: [
    AuthHeadComponent,
    ButtonComponent,
    RouterLink,
    CartItemComponent,
    KeyValueComponent,
    AsyncPipe,
    CurrencyPipe,
    InputComponent,
    ReactiveFormsModule,
  ],
})
export class CheckoutComponent implements OnDestroy {
  cartFacade = inject(CartFacade);
  orderFacade = inject(orderFacade);
  authFacade = inject(AuthFacade);
  router=inject(Router)

  public total: number = 0;
  sub$ = new Subject();
  sum$ = this.cartFacade.cart$.pipe(
    map((cart) =>
      cart
        .filter((item) => item?.quantity && item.quantity > 0)
        .reduce((acc, item: any) => acc + +item?.quantity * +item.price, 0)
    ),
    tap((res) => (this.total = res))
  );

  carts$: Observable<{ image: string[]; id: string }[]> =
    this.cartFacade.cart$.pipe(
      map((cart) => cart.map((item) => ({ image: item.image, id: item.id })))
    );

  form = new FormGroup({
    street: new FormControl<string>('', Validators.required),
    city: new FormControl<string>('', Validators.required),
    state: new FormControl<string>('', Validators.required),
    zipCode: new FormControl<string>('', Validators.required),
    country: new FormControl<string>('', Validators.required),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    fullName: new FormControl<string>('', Validators.required),
  });

  checkout() {
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      return;
    }


    const order: order = {
      userId: this.authFacade.user.id,
      user: this.authFacade.user,
      product: this.cartFacade.allProducts,
      total: this.total,
      status: 'pending',
      createdAt: new Date(),
      shipping: this.form.value as any,
    };

    this.orderFacade
      .createOrder(order)
      .pipe(takeUntil(this.sub$))
      .subscribe((res) => {
        console.log(res);

        this.cartFacade.setToLocalStorage([]);
        this.router.navigate(['profile/successOrder'])
      });

     if(order.product.length===0){
      this.router.navigate(['profile/failedOrder'])

      return

     }

  }
  removeFromCart($event: Event) {
    throw new Error('Method not implemented.');
  }
  ngOnDestroy(): void {
    this.sub$.next(null);
    this.sub$.complete();
  }
}
