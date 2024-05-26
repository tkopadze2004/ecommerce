import { Component, Inject, OnDestroy, inject } from '@angular/core';
import { wishlistFacade } from '../../../facades/wishlist.facade';
import { AsyncPipe } from '@angular/common';
import { ProductItemComponent } from '../../../components/product-item/product-item.component';
import { ButtonComponent } from '../../../ui/button/button.component';
import { Wishlist } from '../../../core/interfaces.ts/wishlist.interface';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss', '../../profile/profile.style.scss'],
  imports: [AsyncPipe, ProductItemComponent, ButtonComponent],
})
export class WishlistComponent implements OnDestroy {
  wishlistFacade = inject(wishlistFacade);
  wishlist$ = this.wishlistFacade.getWishlist();
  sub$ = new Subject();
  deletewishlist(wishlist: Wishlist) {
    if (!wishlist.id) {
      return;
    }
    this.wishlistFacade
      .deleteWishlist(wishlist.id)
      .pipe(takeUntil(this.sub$))
      .subscribe(() => {
        this.wishlist$ = this.wishlistFacade.getWishlist();
      });
  }
  ngOnDestroy(): void {
    this.sub$.next(null);
    this.sub$.complete();
  }
}
