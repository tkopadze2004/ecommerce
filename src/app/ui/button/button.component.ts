import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'button[alte-button]',
  standalone: true,
  imports: [],
  template: `
    <ng-content/>
  `,
  host: {
    class: 'alte-button',
    '[class.alte-button--default]': 'size === "default"',
    '[class.alte-button--small]': 'size === "small"',
    '[class.alte-button--primary]': 'theme === "primary"',
    '[class.alte-button--outline]': 'theme === "outline"',
    '[class.alte-button--outlineblack]': 'theme === "outlineblack"',
    '[class.alte-button--outlinesm]': 'theme === "outlinesm"',
    '[class.alte-button--block]': 'block'

  }
})
export class ButtonComponent {
  @Input() size: 'default' | 'small' = 'default'
  @Input() theme: 'primary' | 'outline'  |'outlineblack'|'outlinesm' = 'primary'
  @Input() disabled :boolean=false
  @Input ({transform:booleanAttribute}) block : boolean=false
}