import { Component } from '@angular/core';
// import { BaseComponent } from '../base/base.component';
import { PROFILE } from '../../../data/profile';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [BaseComponent],
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss', '../../profile/profile.style.scss'],
})
export class OrdersComponent {
  profile = PROFILE;
}
