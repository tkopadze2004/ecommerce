import { Component, inject } from '@angular/core';
import { HeroBannerComponent } from '../../components/hero-banner/hero-banner.component';
import { FeaturesComponent } from '../../components/features/features.component';
import { BestSellerComponent } from '../../components/best-seller/best-seller.component';
import { Observable } from 'rxjs';
import { ProductsFacade } from '../../facades/products.facade';
import { Products } from '../../core/interfaces.ts/products';
import { AsyncPipe } from '@angular/common';
import { ProductItemComponent } from '../../components/product-item/product-item.component';
import { ButtonComponent } from '../../ui/button/button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [
    HeroBannerComponent,
    FeaturesComponent,
    BestSellerComponent,
    AsyncPipe,
    ProductItemComponent,
    ButtonComponent,
    RouterLink,
  ],
})
export class HomeComponent {
  ProductsFacade = inject(ProductsFacade);
  latestProducts$: Observable<Products[]> = this.ProductsFacade.bestSelling();
}
