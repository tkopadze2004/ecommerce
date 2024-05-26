//biznes logikebi iwerebaaq

import { Injectable, inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AuthPayload } from '../core/interfaces.ts/auth-payload';
import { StorageService } from '../core/services';
import { Observable, map, tap } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../core/interfaces.ts';

@Injectable({ providedIn: 'root' })
export class AuthFacade {
  authService = inject(AuthService);
  storageService = inject(StorageService);
  router = inject(Router);

  get isAuthenticated(): boolean {
    return !!this.token;
  }

  get token(): string {
    return this.storageService.getItem('token');
  }

  get refreshToken() {
    return this.storageService.getItem('refreshToken');
  }

  get user() {
    return this.storageService.getItem('user');
  }

  register(payload: AuthPayload) {
    return this.authService.register(payload).pipe(
      tap((res) => {
        this.storageService.setItem('token', res.idToken);
        this.storageService.setItem('refreshToken', res.refreshToken);
        this.storageService.setItem('user', {
          email: res.email,
          id: res.localId,
        });
      })
    );
  }

  login(payload: AuthPayload) {
    return this.authService.login(payload).pipe(
      tap((res) => {
        this.storageService.setItem('token', res.idToken);
        this.storageService.setItem('refreshToken', res.refreshToken);
        this.storageService.setItem('user', {
          email: res.email,
          id: res.localId,
        });
      })
    );
  }

  sendOobCode(email: string) {
    return this.authService.sendOobCode(email);
  }

  resetPassword(oobCode: string, newPassword: string) {
    return this.authService.resetPassword(oobCode, newPassword);
  }

  logout() {
    this.storageService.clear();
    this.router.navigate(['/']);
  }

  getUser(): Observable<User> {
    return this.authService.lookup(this.token).pipe(
      map((res) => {
        if (res.users.length) {
          return res.users[0];
        }
        return {} as User;
      })
    );
  }

  passwordchange(password: string) {
    return this.authService.passwordchange(this.token, password).pipe(
      tap((res) => {
        this.storageService.setItem('token', res.idToken);
        this.storageService.setItem('refreshToken', res.refreshToken);
        this.storageService.setItem('user', {
          email: res.email,
          id: res.localId,
        });
      })
    );
  }
}
//service-apiservice movaleoba aris api cominukacia xolo afacadsshi biznes logikebs vwert
//facade elaparakeba services and
// registershi services magivrad shevitant facades
