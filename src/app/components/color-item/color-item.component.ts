import { NgStyle } from '@angular/common';
import { Component, Input, booleanAttribute } from '@angular/core';


@Component({
  selector: 'app-color-item',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './color-item.component.html',
  styleUrl: './color-item.component.scss'
})
export class ColorItemComponent {
  @Input() color: string = '#4078ff';

  @Input({transform:booleanAttribute}) active: boolean = false;

}
