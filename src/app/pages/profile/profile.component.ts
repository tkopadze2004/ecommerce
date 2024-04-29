import { Component, inject } from '@angular/core';
import { AuthHeadComponent } from '../auth/auth-head/auth-head.component';
import { OrdersComponent } from './subsections/orders/orders.component';
import { AuthFacade } from '../../facades';
import { AsyncPipe } from '@angular/common';
// import { OrdersComponent } from './subsections/orders/orders.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [AuthHeadComponent,OrdersComponent,AsyncPipe],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
authfacade=inject(AuthFacade)

user$=this.authfacade.getUser()

}
