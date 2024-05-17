import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CategoryFacade } from '../../facades/category.facade';
import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { FilterCardComponent } from '../../components/filter-card/filter-card.component';
import { FilterCardCheckboxItemComponent } from '../../components/filter-card-checkbox-item/filter-card-checkbox-item.component';
import { colorsFacade } from '../../facades/colors.facade';
import { ColorItemComponent } from '../../components/color-item/color-item.component';
import { SIZE, SIZES } from '../../core/types/size.type';
import { ProductItemComponent } from '../../components/product-item/product-item.component';
import { ProductsFacade } from '../../facades/products.facade';
import { Subject, switchMap, take, takeUntil } from 'rxjs';
import { category } from '../../core/interfaces.ts/category.interface';
import { Products } from '../../core/interfaces.ts/products';
import { colors } from '../../core/interfaces.ts/colors.interface';

@Component({
  selector: 'app-categories',
  standalone: true,
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
  imports: [
    JsonPipe,
    AsyncPipe,
    BreadcrumbComponent,
    FilterCardComponent,
    FilterCardCheckboxItemComponent,
    ColorItemComponent,
    NgIf,
    ProductItemComponent,
  ],
})
export class CategoriesComponent implements OnInit, OnDestroy {
  route = inject(ActivatedRoute);
  router = inject(Router);
  categoryFacade = inject(CategoryFacade);
  colorfacade = inject(colorsFacade);
  productFacade = inject(ProductsFacade);

  selectedCategory: Map<string, category> = new Map();
  selectedColor?: string;
  selectedSize?: SIZE;

  sizes = SIZES;
  categories$ = this.categoryFacade.getCategories();
  colors$ = this.colorfacade.getColors();

  products: Products[] = [];

  sub$ = new Subject();

  ngOnInit() {
    this.route.queryParams.pipe(takeUntil(this.sub$)).subscribe((params) => {
      console.log(params);
// this.selectedCategory.clear();
      // this.selectedCategory.set(params['id'], {} as category),
      this.selectedColor=params['color']
      this.selectedSize=params['size']

        this.getProducts(
          [...this.selectedCategory.keys()],
          this.selectedColor,
          this.selectedSize

        )

});
  }

  getProducts(categoryId: string[], colorId?: string, size?: string) {
    this.productFacade
      .getProducts({
        categoryId,
        colorId,
        size,
      })
      .pipe(takeUntil(this.sub$))
      .subscribe((products) => {
        console.log(products);
        this.products = products;
      });
  }

  onCategoryCheck($event: { category: category; checked: boolean }) {
    if (!$event.checked) {
      this.selectedCategory.delete($event.category.id);
    } else {
      this.selectedCategory.set($event.category.id, $event.category);
    }
    this.router.navigate([], {
      queryParams: {
        category: [...this.selectedCategory.keys()],
      },
    });
  }

  selectColor(color: colors) {
    this.selectedColor = color.id;
    // this.getProducts(
    //   [...this.selectedCategory.keys()],
    //   this.selectedColor.id,
    //   this.selectedSize
    // );

    this.router.navigate([],{
      queryParams:{
        color:this.selectedColor
      },queryParamsHandling:'merge'
    })
  }
  selectSize(size: SIZE) {
    this.selectedSize = size;
    this.router.navigate([],{
      queryParams:{
        size:this.selectedSize
  },queryParamsHandling:'merge'
})
    // this.getProducts(
    //   [...this.selectedCategory.keys()],
    //   this.selectedColor?.id,
    //   this.selectedSize
    // );
  }

  ngOnDestroy(): void {
    this.sub$.next(null);
    this.sub$.complete();
  }
}
