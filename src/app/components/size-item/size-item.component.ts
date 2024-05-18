import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SIZE } from '../../core/types/size.type';

@Component({
  selector: 'app-size-item',
  standalone: true,
  imports: [],
  templateUrl: './size-item.component.html',
  styleUrl: './size-item.component.scss'
})
export class SizeItemComponent {

  @Input()  size :SIZE='L'
  @Input () selected  : boolean=false

  @Output()select :EventEmitter<SIZE>=new EventEmitter <SIZE>()
}
