import { Component, Input, Optional, Self } from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NgControl,
} from '@angular/forms';

let uniqId = 1;
@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent implements ControlValueAccessor {
  @Input() type: 'text' | 'password' | 'number' | 'email' = 'text';
  @Input() placeholder = '';
  @Input() label = '';
  @Input() error = '';

  value: string = '';
  disabled: boolean = false;
  onchange = (value: string): void => {};
  ontouched = () => {};

  constructor(@Optional() @Self() public ngControl: NgControl) {
    if (ngControl) {
      ngControl.valueAccessor = this;
    }
  }

  get isInvalid(): boolean {
    return !!(this.ngControl?.invalid && this.ngControl?.touched);
  }

  get inputId() {
    return `input-${uniqId++}`;
  }

  writeValue(value: any): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onchange = fn;
  }

  registerOnTouched(fn: any): void {
    this.ontouched = fn;
  }
  setDisabledState(Disabled: boolean): void {
    this.disabled = Disabled;
  }
}
