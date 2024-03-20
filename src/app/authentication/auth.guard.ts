import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';

  let router = inject(Router);
  if (!isLoggedIn) {
    alert('Please login');
    router.navigate(['login']);
    return false;
  }

  return true;
};
