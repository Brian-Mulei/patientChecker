import { Injectable } from '@angular/core';

import { CanActivate, Router } from '@angular/router';
import { Storage } from '@ionic/storage';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate  {

constructor(private storage: Storage, private router: Router) {}

  canActivate(): Promise<boolean> {
    return this.storage.get('isLoggedIn').then((isLoggedIn) => {
      if (isLoggedIn) {
        this.router.navigateByUrl('/home'); // Redirect to login if not logged in

        return true; // User is logged in, allow access
      } else {
        this.router.navigateByUrl('/login'); // Redirect to login if not logged in
        return false;
      }
    });
  }

}
