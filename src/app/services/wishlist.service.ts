import { Injectable } from '@angular/core';
import { FirebaseDocument } from '../core/interfaces.ts/firebase-document';
import { Wishlist } from '../core/interfaces.ts/wishlist.interface';
import { ApiService } from '../core/services';
import { ReadPropExpr } from '@angular/compiler';

@Injectable({ providedIn: 'root' })
export class wishlistService extends ApiService {
  getWishlists(userId: string) {
    return this.get<FirebaseDocument<Wishlist>[]>('wishlist.json', {
      orderBy: '"userId"',
      equalTo: `"${userId}"`,
    });
  }

  getWishlistById(id: string) {
    return this.get<FirebaseDocument<Wishlist>>(`wishlist/${id}.json`);
  }

  createWishlist(wishlist: Wishlist) {
    return this.post<FirebaseDocument<any>>('wishlist.json', wishlist);
  }

  deleteWishlist(id: string) {
    return this.delete(`wishlist/${id}.json`);
  }
}
