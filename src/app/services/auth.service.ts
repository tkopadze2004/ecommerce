import { Injectable } from '@angular/core';
import { ApiService } from '../core/services';
import { environment } from '../../environments/environment';
import { AuthPayload, AuthResponse } from '../core/interfaces.ts/auth-payload';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends ApiService {
  override apiUrl = environment.firebaseAuthUrl;
  apiKey = environment.firebaseApiKey;

  register(params: AuthPayload): Observable<AuthResponse> {
    return this.post<AuthResponse>(
      `accounts:signUp?key=${this.apiKey}`,
      params
    );
  }

  login(payload:AuthPayload) {
  return this.post<AuthResponse>(`accounts:signInWithPassword?key=${this.apiKey}`,{...payload,returnSecureToken	:true})
  }
}
