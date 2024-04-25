import { Component } from '@angular/core';
import { BEST_SELLER } from '../../data/bestseller-products';

@Component({
  selector: 'app-best-seller',
  standalone: true,
  imports: [],
  templateUrl: './best-seller.component.html',
  styleUrl: './best-seller.component.scss'
})
export class BestSellerComponent {
  bestseller=BEST_SELLER

}
