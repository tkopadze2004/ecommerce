import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filter-card-checkbox-item',
  standalone: true,
  imports: [],
  templateUrl: './filter-card-checkbox-item.component.html',
  styleUrl: './filter-card-checkbox-item.component.scss',
})
export class FilterCardCheckboxItemComponent {
  @Input() name: string = '';
}
