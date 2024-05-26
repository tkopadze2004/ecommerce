import { Injectable, inject } from '@angular/core';
import { wishlistService } from '../services/wishlist.service';
import { AuthFacade } from './auth.facade';
import { map, throwError } from 'rxjs';
import { Wishlist } from '../core/interfaces.ts/wishlist.interface';
import { Products } from '../core/interfaces.ts/products';

@Injectable({ providedIn: 'root' })
export class wishlistFacade {
  wishlistService = inject(wishlistService);
  authfacade = inject(AuthFacade);

  getWishlist() {
    return this.wishlistService.getWishlists(this.authfacade.user.id).pipe(
      map((wishlist) => {
        return Object.keys(wishlist).map(
          (key: any) => ({ ...wishlist[key], id: key } as Wishlist)
        );
      })
    );
  }

  getWishlistById(id: string) {
    return this.wishlistService.getWishlistById(id).pipe(
      map(
        (wishlist) =>
          ({
            ...wishlist,
            id,
          } as Wishlist)
      )
    );
  }

  createWishlist(product: Products) {
    if (!this.authfacade.isAuthenticated) {
      return throwError(() => new Error('user is not authenticated'));
    }

    const wishlist: Wishlist = {
      product,
      userId: this.authfacade.user.id,
    };

    return this.wishlistService.createWishlist(wishlist);
  }
  deleteWishlist(id: string) {
    return this.wishlistService.deleteWishlist(id);
  }
}
