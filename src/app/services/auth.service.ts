import { Injectable } from '@angular/core';
import { ApiService } from '../core/services';
import { environment } from '../../environments/environment';
import { RegisterPayload, RegisterResponse } from '../core/interfaces.ts/auth-payload';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends ApiService {
  override apiUrl = environment.firebaseAuthUrl;
  apiKey= environment.firebaseApiKey

  register(params: RegisterPayload):Observable<RegisterResponse> {
    return this.post<RegisterResponse>(`accounts:signUp?key=${this.apiKey}`, params);
  }
}
