//biznes logikebi iwerebaaq

import { Injectable, inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AuthPayload } from '../core/interfaces.ts/auth-payload';
import { StorageService } from '../core/services';
import { tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthFacade {
  authService = inject(AuthService);
  storageService = inject(StorageService);

  get token() {
    return this.storageService.getItem('token');
  }
  get refreshToken() {
    return this.storageService.getItem('refreshtoken');
  }
  get User() {
    return this.storageService.getItem('User');
  }

  register(payload: AuthPayload) {
    return this.authService.register(payload).pipe(
      tap((res) => {
        this.storageService.setItem('idToken', res.idToken);
        this.storageService.setItem('refreshtoken', res.refreshToken);
        this.storageService.setItem('User', {
          email: res.email,
          localid: res.localId,
        });
      })
    );
  }

  login(payload: AuthPayload) {
    return this.authService.login(payload).pipe(
      tap((res) => {
        this.storageService.setItem('idToken', res.idToken);
        this.storageService.setItem('refreshtoken', res.refreshToken);
        this.storageService.setItem('User', {
          email: res.email,
          localid: res.localId,
        });
      })
    );
  }

  logout(){
    this.storageService.clear()
  }
}
//service-apiservice movaleoba aris api cominukacia xolo afacadsshi biznes logikebs vwert
//facade elaparakeba services and
// registershi services magivrad shevitant facades
