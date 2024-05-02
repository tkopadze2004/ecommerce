import { Component, inject } from '@angular/core';
import { feature } from '../../data/features';
import { CategoryFacade } from '../../facades/category.facade';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent {
 feature = feature


}
