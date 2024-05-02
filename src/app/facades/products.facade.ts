import { Injectable, inject } from '@angular/core';
import { ProductService } from '../services/products.service';
import { map, pipe } from 'rxjs';
import { Products } from '../core/interfaces.ts/products';

@Injectable({ providedIn: 'root' })
export class ProductsFacade {
  productsservice = inject(ProductService);

  getProducts() {
    return this.productsservice.getProducts().pipe(
      map((Products) => {
        return Object.keys(Products).map(
          (key: any) =>
            ({
              ...Products[key],
              id: key,
            } as Products)
        );
      })
    );
  }
  getProduct(id: string) {
    return this.productsservice.getProduct(id).pipe(
      map((Products) => {
        return Object.keys(Products).map(
          (key: any) =>
            ({
              ...Products,
              id,
            } as Products)
        );
      })
    );
  }
}
