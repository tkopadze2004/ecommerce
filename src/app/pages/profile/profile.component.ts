import { Component, inject } from '@angular/core';
import { AuthHeadComponent } from '../auth/auth-head/auth-head.component';
import { AsyncPipe } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthFacade } from '../../facades';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    AuthHeadComponent,
    AsyncPipe,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  authfacade = inject(AuthFacade);
  logout() {
    this.authfacade.logout();
  }
}
