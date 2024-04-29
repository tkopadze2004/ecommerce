import { Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { authGuard } from '../../core/guards';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AddressComponent } from './address/address.component';
import { PasswordComponent } from './password/password.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { OrdersComponent } from './orders/orders.component';

export const profileRoutes: Routes = [
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
      },
    ],
  },
];
