import { Products } from './products';

export interface Wishlist {
  id?: string;
  product: Products;
  userId: string;
}
