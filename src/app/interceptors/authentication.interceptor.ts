import { HttpInterceptorFn } from '@angular/common/http';
import { AuthenticationService } from '@services/authentication/authentication.service';
import { inject } from '@angular/core';

export const authenticationInterceptor: HttpInterceptorFn = (req, next) => {
  const authenticationService=inject(AuthenticationService);
  const token=authenticationService.token;

  if(token) {
    const cloned=req.clone({
      headers: req.headers.set(
        'Authorization',
        `Bearer ${authenticationService.token}`
      )
    });

    return next(cloned);

  }

  return next(req);
};
