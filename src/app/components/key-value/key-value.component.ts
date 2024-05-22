import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-key-value',
  standalone: true,
  imports: [],
  templateUrl: './key-value.component.html',
  styleUrl: './key-value.component.scss'
})
export class KeyValueComponent {
@Input({required:true}) key!:string
@Input({required:true}) value!:string
}
