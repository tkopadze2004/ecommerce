import { NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output, booleanAttribute } from '@angular/core';
import { colors } from '../../core/interfaces.ts/colors.interface';


@Component({
  selector: 'app-color-item',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './color-item.component.html',
  styleUrl: './color-item.component.scss'
})
export class ColorItemComponent {
  @Input() color: colors = {} as colors;

  @Input({transform:booleanAttribute}) active: boolean = false;
@Output() selected :EventEmitter<colors>=new EventEmitter<colors>

}
