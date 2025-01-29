import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthenticationService } from '@services/authentication.service';

export const authenticationGuard: CanActivateFn = (route, state) => {
  const authenticationService = inject(AuthenticationService);

  if (!authenticationService.loggedIn) {
    return inject(Router).createUrlTree(['/login'], { queryParams: { returnUrl: state.url }});
  }


  return true;
};
