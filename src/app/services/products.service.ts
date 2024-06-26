import { Injectable } from '@angular/core';
import { ApiService } from '../core/services';
import { FirebaseDocument } from '../core/interfaces.ts/firebase-document';
import { Products } from '../core/interfaces.ts/products';
import { tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductService extends ApiService {
  getProducts() {
    return this.get<FirebaseDocument<Products>[]>('products.json');
  }
  getProduct(id: string) {
    return this.get<FirebaseDocument<Products>>(`products/${id}.json`);
  }

  getRelatedProducts(categoryId: string) {
    return this.get<FirebaseDocument<Products>[]>('products.json', {
      orderBy: '"categoryId"',
      equalTo: `"${categoryId}"`,
    });
  }
  bestSelling(categoryId: string) {
    return this.get<FirebaseDocument<Products>[]>('products.json', {
      orderBy: '"categoryId"',
      equalTo: `"${categoryId}"`,
    });
  }
}
