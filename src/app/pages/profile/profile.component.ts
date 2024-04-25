import { Component } from '@angular/core';
import { AuthHeadComponent } from '../auth/auth-head/auth-head.component';
import { OrdersComponent } from './subsections/orders/orders.component';
// import { OrdersComponent } from './subsections/orders/orders.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [AuthHeadComponent,OrdersComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {}
