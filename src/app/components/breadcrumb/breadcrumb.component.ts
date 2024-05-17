import { Component, Input, booleanAttribute } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss',
})
export class BreadcrumbComponent {
  @Input({ transform:booleanAttribute }) hasBackground: boolean = false
  @Input( {required:true} ) qurrentPage! :string
}
