import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filter-card',
  standalone: true,
  imports: [],
  templateUrl: './filter-card.component.html',
  styleUrl: './filter-card.component.scss',
})
export class FilterCardComponent {
  @Input() name: string = '';
}
