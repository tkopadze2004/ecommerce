import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../../../ui/button/button.component';
import { NgClass } from '@angular/common';
// import { ButtonComponent } from '../../../ui/button/button.component';

@Component({
  selector: 'app-base',
  standalone: true,
  imports: [ButtonComponent,NgClass],
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss', '../../profile/profile.style.scss'],
})
export class BaseComponent {
  @Input() img = '';
  @Input() description: string = '';
  @Input() orderDate: string = '';
  @Input() extraContent: string = '';
  @Input() additionalInfo: string = '';
  @Input() buttonText: string = '';
  @Input() showBorder: boolean = true;
}
