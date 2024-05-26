import { Component } from '@angular/core';
import { AuthHeadComponent } from '../../pages/auth/auth-head/auth-head.component';
import { ButtonComponent } from '../../ui/button/button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-success-order',
  standalone: true,
  templateUrl: './success-order.component.html',
  styleUrl: './success-order.component.scss',
  imports: [AuthHeadComponent, ButtonComponent, RouterLink],
})
export class SuccessOrderComponent {}
