import { Component } from '@angular/core';
import { HeroBannerComponent } from '../../components/hero-banner/hero-banner.component';
import { FeaturesComponent } from '../../components/features/features.component';
import { BestSellerComponent } from '../../components/best-seller/best-seller.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroBannerComponent,
    FeaturesComponent,
    BestSellerComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
