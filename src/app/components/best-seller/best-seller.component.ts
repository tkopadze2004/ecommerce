import { Component, Input, inject } from '@angular/core';
import { ProductItemComponent } from "../product-item/product-item.component";
import { Observable } from 'rxjs';
import { Products } from '../../core/interfaces.ts/products';
import { ProductsFacade } from '../../facades/products.facade';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-best-seller',
    standalone: true,
    templateUrl: './best-seller.component.html',
    styleUrl: './best-seller.component.scss',
    imports: [ProductItemComponent,AsyncPipe]
})
export class BestSellerComponent {
@Input({required:true}) title:string=''
@Input() shop :string=''

  ProductsFacade=inject(ProductsFacade)
  latestProducts$: Observable<Products[]> =  this.ProductsFacade.bestSelling()

}
