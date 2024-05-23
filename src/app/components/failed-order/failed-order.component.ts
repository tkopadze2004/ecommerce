import { Component } from '@angular/core';
import { AuthHeadComponent } from '../../pages/auth/auth-head/auth-head.component';
import { ButtonComponent } from '../../ui/button/button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-failed-order',
  standalone: true,
  imports: [AuthHeadComponent,ButtonComponent,RouterLink],
  templateUrl: './failed-order.component.html',
  styleUrl: './failed-order.component.scss'
})
export class FailedOrderComponent {

}
