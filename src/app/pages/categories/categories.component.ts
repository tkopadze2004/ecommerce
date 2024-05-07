import { Component, OnInit, inject } from '@angular/core';
import { CategoryFacade } from '../../facades/category.facade';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbComponent } from "../../components/breadcrumb/breadcrumb.component";
import { FilterCardComponent } from "../../components/filter-card/filter-card.component";
import { FilterCardCheckboxItemComponent } from "../../components/filter-card-checkbox-item/filter-card-checkbox-item.component";
import { colorsFacade } from '../../facades/colors.facade';
import { ColorItemComponent } from "../../components/color-item/color-item.component";
import { SIZES } from '../../core/types/size.type';
import { ProductItemComponent } from "../../components/product-item/product-item.component";
import { ProductsFacade } from '../../facades/products.facade';

@Component({
    selector: 'app-categories',
    standalone: true,
    templateUrl: './categories.component.html',
    styleUrl: './categories.component.scss',
    imports: [JsonPipe, AsyncPipe, BreadcrumbComponent, FilterCardComponent, FilterCardCheckboxItemComponent, ColorItemComponent, ProductItemComponent]
})
export class CategoriesComponent  implements OnInit{

  route=inject(ActivatedRoute)
  categoryFacade=inject (CategoryFacade)
colorfacade=inject(colorsFacade)
productFacade=inject(ProductsFacade)

sizes=SIZES
  categories$=this.categoryFacade.getCategories()
  colors$=this.colorfacade.getColors()
  products$=this.productFacade.getProducts()
rame: string='rame';
 ngOnInit(): void {
   this.route.params.subscribe((params)=>{
    console.log(params);

   })
 }

}
