import {
  Component,
  EventEmitter,
  Input,
  Output,
  booleanAttribute,
} from '@angular/core';
import { category } from '../../core/interfaces.ts/category.interface';

@Component({
  selector: 'app-filter-card-checkbox-item',
  standalone: true,
  imports: [],
  templateUrl: './filter-card-checkbox-item.component.html',
  styleUrl: './filter-card-checkbox-item.component.scss',
})
export class FilterCardCheckboxItemComponent {
  @Input() category: category = {} as category;
  @Input({
    transform: booleanAttribute,
  })
  active: boolean = false;
  @Output() check: EventEmitter<{
    category: category;
    checked: boolean;
  }> = new EventEmitter<{
    category: category;
    checked: boolean;
  }>();

  checked($event: Event) {
    this.check.emit({
      category: this.category,
      checked: ($event.target as HTMLInputElement).checked,
    });
  }
}
