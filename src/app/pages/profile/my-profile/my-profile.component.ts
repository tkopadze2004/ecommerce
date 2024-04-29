import { Component, inject } from '@angular/core';
import { AuthFacade } from '../../../facades';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-my-profile',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.scss',
})
export class MyProfileComponent {
  authfacade = inject(AuthFacade);

  user$ = this.authfacade.getUser();
}
