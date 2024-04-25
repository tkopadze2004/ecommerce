import { Component } from '@angular/core';
import { feature } from '../../data/features';

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
