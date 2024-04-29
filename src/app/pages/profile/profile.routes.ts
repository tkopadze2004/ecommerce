import { Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { OrdersComponent } from './subsections/orders/orders.component';

export const profileRouter: Routes = [
  {
    path: '',
    component: ProfileComponent,
  },
  {
    path:'orders',
    component:OrdersComponent
  }
];
