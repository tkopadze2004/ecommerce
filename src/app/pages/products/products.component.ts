import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/products.service';
import { map, mergeMap, share, switchMap, tap } from 'rxjs';
import { AsyncPipe, CurrencyPipe, JsonPipe, NgIf } from '@angular/common';
import { ProductsFacade } from '../../facades/products.facade';
import { CategoryFacade } from '../../facades/category.facade';
import { colorsFacade } from '../../facades/colors.facade';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { ReviewComponent } from "../../components/review/review.component";
import { StockCheckComponent } from "../../components/stock-check/stock-check.component";

@Component({
    selector: 'app-products',
    standalone: true,
    templateUrl: './products.component.html',
    styleUrl: './products.component.scss',
    imports: [AsyncPipe, JsonPipe, BreadcrumbComponent, ReviewComponent, NgIf, StockCheckComponent,CurrencyPipe]
})
export class ProductsComponent {
  activatedroute = inject(ActivatedRoute);
  ProductsFacade = inject(ProductsFacade);
  categoryFacade = inject(CategoryFacade);
  colorsFacade = inject(colorsFacade);
  product$ = this.activatedroute.params.pipe(
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
              .getCategoriesById(product.categoryId)
              .pipe(map((category) => ({ ...product, category })))
          ),
          mergeMap((product) =>
            this.colorsFacade
              .getColorsById(product.colorId)
              .pipe(map((color) => ({ ...product, color })))
          )
        )
    ),
    share()
  );
}
