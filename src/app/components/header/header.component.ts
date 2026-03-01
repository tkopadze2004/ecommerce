import { Component, HostListener, inject } from '@angular/core';
import { ButtonComponent } from '../../ui/button/button.component';
import { RouterLink, Router, NavigationEnd } from '@angular/router';
import { AuthFacade } from '../../facades';
import { CdkMenu, CdkMenuTrigger } from '@angular/cdk/menu';
import { CategoryFacade } from '../../facades/category.facade';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { CartFacade } from '../../facades/cart.facade';
import { map, filter } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent, CurrencyPipe, RouterLink, CdkMenuTrigger, CdkMenu, AsyncPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private readonly authfacade = inject(AuthFacade);
  private readonly categoryFacade = inject(CategoryFacade);
  cartFacade = inject(CartFacade);
  private readonly router = inject(Router);

  menuOpen = false;

  cartCountt$ = this.cartFacade.cart$.pipe(
    map((cart) => cart.filter(
      (item) => item?.quantity && item.quantity > 0
    ).reduce((acc, item: any) => acc + +item?.quantity, 0))
  );
  cartCount$ = this.cartFacade.cart$.pipe(
    map((cart) => cart.filter(
      (item) => item?.quantity && item.quantity > 0
    ).reduce((acc, item: any) => acc + (+item?.quantity * +item.price), 0))
  );

  public categories$ = this.categoryFacade.getCategories();

  constructor() {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe(() => {
      this.menuOpen = false;
    });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  @HostListener('document:keydown.escape')
  closeMenu() {
    this.menuOpen = false;
  }

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
