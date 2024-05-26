import { Component, inject } from '@angular/core';
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
import {  switchMap, tap } from 'rxjs';
import { category } from '../../core/interfaces.ts/category.interface';
import { colors } from '../../core/interfaces.ts/colors.interface';
import { SizeItemComponent } from '../../components/size-item/size-item.component';

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
    SizeItemComponent,
  ],
})
export class CategoriesComponent {
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

  products$ = this.route.queryParams.pipe(
    tap((params) => {
      this.selectedCategory.clear();
      const category = params['category'];

      if (category) {
        if (Array.isArray(category)) {
          category.forEach((id) => {
            this.selectedCategory.set(id, {} as category);
          });
        } else {
          this.selectedCategory.set(category, {} as category);
        }
      }
    }),
    switchMap((params) => {
      return this.productFacade.getProducts({
        categoryId: params['category'],
        colorId: params['color'],
        size: params['size'],
      });
    })
  );

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
    this.router.navigate([], {
      queryParams: {
        color: this.selectedColor,
      },
      queryParamsHandling: 'merge',
    });
  }
  selectSize(size: SIZE) {
    this.selectedSize = size;
    this.router.navigate([], {
      queryParams: {
        size: this.selectedSize,
      },
      queryParamsHandling: 'merge',
    });
  }
}
