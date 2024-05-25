import { Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { authGuard } from '../../core/guards';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AddressComponent } from './address/address.component';
import { PasswordComponent } from './password/password.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SuccessOrderComponent } from '../../components/success-order/success-order.component';
import { FailedOrderComponent } from '../../components/failed-order/failed-order.component';

export const profileRoutes: Routes = [
  {
    path:'cart',
    component:CartComponent,
    canActivate: [authGuard],
  },
  {
    path:'checkout',
    component:CheckoutComponent,
    canActivate: [authGuard],
  },
  {
    path:'successOrder',
    component:SuccessOrderComponent,
    canActivate: [authGuard],
  },
  {
    path:'failedOrder',
    component:FailedOrderComponent,
    canActivate: [authGuard],
  },
  {
    path: '',
    component: ProfileComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        redirectTo: 'myProfile',
        pathMatch: 'full',
      },
      {
        path: 'orders',
       loadChildren :  () =>  import ( './orders/order.route' ).then(m=> m.orderRoutes)
      },
      {
        path: 'wishlist',
        component: WishlistComponent,
      },
      {
        path: 'address',
        component: AddressComponent,
      },
      {
        path: 'password',
        component: PasswordComponent,
      },
      {
        path: 'myProfile',
        component: MyProfileComponent,
      }
    ],
  },
];
