import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'button[alte-button]',
  standalone: true,
  imports: [],
  template: `
    <ng-content/>
  `,
  host: {
    class: 'button[alte-button] ,a[alte-button]',
    '[class.alte-button--default]': 'size === "default"',
    '[class.alte-button--small]': 'size === "small"',
    '[class.alte-button--primary]': 'theme === "primary"',
    '[class.alte-button--outline]': 'theme === "outline"',
    '[class.alte-button--icon]': 'theme === "icon"',
    '[class.alte-button--outline-icon]': 'theme === "outline-icon"',
    '[class.alte-button--outlineblack]': 'theme === "outlineblack"',
    '[class.alte-button--outlinesm]': 'theme === "outlinesm"',

    '[class.alte-button--block]': 'block'

  }
})
export class ButtonComponent {
  @Input() size: 'default' | 'small' = 'default'
  @Input() theme: 'primary' | 'outline'  |'outlineblack'|'outlinesm' | 'icon' | 'outline-icon' = 'primary'
  @Input() disabled :boolean=false
  @Input ({transform:booleanAttribute}) block : boolean=false
}
