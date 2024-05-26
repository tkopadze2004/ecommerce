import { Component, inject } from '@angular/core';
import { wishlistFacade } from '../../../facades/wishlist.facade';
import { AsyncPipe } from '@angular/common';
import { ProductItemComponent } from '../../../components/product-item/product-item.component';
import { ButtonComponent } from '../../../ui/button/button.component';
import { Wishlist } from '../../../core/interfaces.ts/wishlist.interface';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss', '../../profile/profile.style.scss'],
  imports: [AsyncPipe, ProductItemComponent, ButtonComponent],
})
export class WishlistComponent {
  wishlistFacade = inject(wishlistFacade);
  wishlist$ = this.wishlistFacade.getWishlist();

  deletewishlist(wishlist: Wishlist) {
    if (!wishlist.id) {
      return;
    }
    this.wishlistFacade.deleteWishlist(wishlist.id).subscribe(() => {
      this.wishlist$ = this.wishlistFacade.getWishlist();
    });
  }
}
