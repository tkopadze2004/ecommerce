import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
//es service aris abstraqcia romelsac sxva servicsebshi gamoviyenebt,calke mdgomia
//core shi inaxeba abstraqtuli  nawilebi,sadac buisnes logic ar iwereba
export class ApiService {
  apiUrl = environment.firebaseUrl;
  http: HttpClient=inject(HttpClient)

  get<T>(path: string, params?: any): Observable<T> {
    const httpParams = new HttpParams({
      fromObject: params,
    });
    return this.http.get<T>(`${this.apiUrl}/${path}`, {
      params: httpParams,
    });
  }

  post<T>(path:string,body:any):Observable<T>{
    return this.http.post<T>(`${this.apiUrl}/${path}`,body)
   }
  put<T>(path: string, body: any): Observable<T> {
    return this.http.put<T>(`${this.apiUrl}/${path}`, body);
  }
  delete<T>(path: string, params?: any): Observable<T> {
    const httpParams = new HttpParams({
      fromObject: params,
    });
    return this.http.delete<T>(`${this.apiUrl}/${path}`, {
      params: httpParams,
    });
  }
}
