import { Component } from '@angular/core';
import { WISHLIST } from '../../../data/wishlist';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [BaseComponent],
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss','../../profile/profile.style.scss']
})
export class WishlistComponent {
wishlist=WISHLIST
}
