import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { AuthFacade } from '../../facades';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  //guard vicav, tu token aris mara person is not avtorizebuli mashin profilshe shesvlisas gamoadebs ,arhseushevbs
  const authfacade=inject(AuthFacade)
  return next(req)
  .pipe(
    catchError((err: any) => {
      if (err.status === 400) {
        console.log('400 error')
        if (err.error.error.message === 'INVALID_ID_TOKEN') {
          authfacade.logout()
          return throwError(() => err)
        }
      }
      return throwError(() => err)
    })
  )




};
