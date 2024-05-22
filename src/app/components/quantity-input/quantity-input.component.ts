import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quantity-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './quantity-input.component.html',
  styleUrl: './quantity-input.component.scss',
})
export class QuantityInputComponent {
  @Input() quantity: number = 1;
  @Output() quantityChange: EventEmitter<number> = new EventEmitter<number>();

  decrease() {
    this.quantity -= 1;
    this.quantityChange.emit(this.quantity);
  }
  increase() {
    this.quantity += 1;
    this.quantityChange.emit(this.quantity)

  }
}
