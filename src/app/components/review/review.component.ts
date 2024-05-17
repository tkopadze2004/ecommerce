import { Component, Input } from '@angular/core';
import { Products, review } from '../../core/interfaces.ts/products';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [],
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss'
})
export class ReviewComponent {
@Input() review : review = {} as review
}
