import { Component } from '@angular/core';
import { WISHLIST } from '../../../data/wishlist';
// import { BaseComponent } from '../../../components/f/order-item';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  // imports: [BaseComponent],
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss', '../../profile/profile.style.scss'],
})
export class WishlistComponent {
  wishlist = WISHLIST;
}
