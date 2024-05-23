import { Injectable } from '@angular/core';
import { ApiService } from '../core/services';
import { environment } from '../../environments/environment';
import { AuthPayload, AuthResponse } from '../core/interfaces.ts/auth-payload';
import { Observable } from 'rxjs';
import { User } from '../core/interfaces.ts/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends ApiService {
  override apiUrl = environment.firebaseAuthUrl;
  apiKey = environment.firebaseApiKey;

  register(params: AuthPayload): Observable<AuthResponse> {
    return this.post<AuthResponse>(`accounts:signUp?key=${this.apiKey}`, params)
  }

  login(payload: AuthPayload) {
    return this.post<AuthResponse>(`accounts:signInWithPassword?key=${this.apiKey}`, {
      ...payload,
      returnSecureToken: true
    })
  }
  sendOobCode(email: string) {
    return this.post(`accounts:sendOobCode?key=${this.apiKey}`, {
      requestType: 'PASSWORD_RESET',
      email,
    });
  }

  resetPassword(oobCode:string,newPassword:string){
    return this.post(`accounts:resetPassword?key=${this.apiKey}`,{
      oobCode,
      newPassword
    })
  }

  lookup(idToken:string){
    return this.post<{
      users: User[]
    }>(`accounts:lookup?key=${this.apiKey}`,{
      idToken
    })
  }

  passwordchange(idToken:string,password:string){
    return this.post<AuthResponse>(`accounts:update?key=${this.apiKey}`,{
      idToken,
      password,
      returnSecureToken:true
    })
  }
}
