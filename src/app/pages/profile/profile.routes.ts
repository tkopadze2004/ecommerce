import { Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { authGuard } from '../../core/guards';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AddressComponent } from './address/address.component';
import { PasswordComponent } from './password/password.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { OrdersComponent } from './orders/orders.component';
import { CartComponent } from './cart/cart.component';

export const profileRoutes: Routes = [
  {
    path:'cart',
    component:CartComponent,
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
        component: OrdersComponent,
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
