import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/products.service';
import { Observable, map, mergeMap, share, shareReplay, switchMap, tap } from 'rxjs';
import {
  AsyncPipe,
  CurrencyPipe,
  JsonPipe,
  NgFor,
  NgIf,
} from '@angular/common';
import { ProductsFacade } from '../../facades/products.facade';
import { CategoryFacade } from '../../facades/category.facade';
import { colorsFacade } from '../../facades/colors.facade';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { ReviewComponent } from '../../components/review/review.component';
import { StockCheckComponent } from '../../components/stock-check/stock-check.component';
import { ColorItemComponent } from '../../components/color-item/color-item.component';
import { SizeItemComponent } from '../../components/size-item/size-item.component';
import { ButtonComponent } from '../../ui/button/button.component';
import { DomSanitizer } from '@angular/platform-browser';
import { Products } from '../../core/interfaces.ts/products';
import { ProductItemComponent } from '../../components/product-item/product-item.component';
import { QuantityInputComponent } from '../../components/quantity-input/quantity-input.component';
import { CartFacade } from '../../facades/cart.facade';

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  imports: [
    ButtonComponent,
    AsyncPipe,
    ProductItemComponent,
    NgFor,
    JsonPipe,
    BreadcrumbComponent,
    ReviewComponent,
    NgIf,
    StockCheckComponent,
    CurrencyPipe,
    ColorItemComponent,
    SizeItemComponent,
    QuantityInputComponent,
  ],
})
export class ProductsComponent {
  activatedroute = inject(ActivatedRoute);
  ProductsFacade = inject(ProductsFacade);
  categoryFacade = inject(CategoryFacade);
  cartFacade = inject(CartFacade);
  colorsFacade = inject(colorsFacade);
  sanitaizer = inject(DomSanitizer);

  quantity: number = 1;
  product$: Observable<Products> = this.activatedroute.params.pipe(
    switchMap((params) =>
      this.ProductsFacade.getProduct(params['id'])
        // .pipe(
        //   map((product) => {
        //     let cover;
        //     if (product.image && product.image.length) {
        //       cover = product.image[0];
        //     }
        //     return {
        //       ...product,
        //       cover,
        //     };
        //   })
        // )
        .pipe(
          mergeMap((product) =>
            this.categoryFacade
              .getCategoryById(product.categoryId)
              .pipe(map((category) => ({ ...product, category })))
          ),
          mergeMap((product) =>
            this.colorsFacade
              .getColorById(product.colorId)
              .pipe(map((color) => ({ ...product, color })))
          )
        )
    )
  )


  relatedProducts$: Observable<Products[]> = this.product$.pipe(
    switchMap((product) =>
      this.ProductsFacade.getRelatedProducts(product.categoryId, product.id)
    )
  );
  // ragaca$ = this.relatedProducts$.subscribe((res) => console.log(res));

  addToWishlist() {
    throw new Error('Method not implemented.');
  }
  addToCart(product: Products) {
    this.cartFacade.addToCart(product, this.quantity);
  }
}
