import { Component, inject } from '@angular/core';
import { ButtonComponent } from '../../ui/button/button.component';
import { RouterLink } from '@angular/router';
import { AuthFacade } from '../../facades';
import { CdkMenuTrigger } from '@angular/cdk/menu';
import { CategoryFacade } from '../../facades/category.facade';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent, RouterLink, CdkMenuTrigger, AsyncPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private readonly authfacade = inject(AuthFacade);
  private readonly categoryFacade = inject(CategoryFacade);

  public categories$ = this.categoryFacade.getCategories();

  get user() {
    return this.authfacade.user;
  }

  get isAuthenticated() {
    return this.authfacade.isAuthenticated;
  }

  logout() {
    this.authfacade.logout();
  }
}
