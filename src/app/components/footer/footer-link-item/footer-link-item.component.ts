import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer-link-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer-link-item.component.html',
  styleUrl: './footer-link-item.component.scss',
})
export class FooterLinkItemComponent {
  @Input() title: string = '';
  @Input() links: { title: string; url: string }[] = [];
}
