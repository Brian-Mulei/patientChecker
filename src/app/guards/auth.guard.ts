import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private _storage: Storage ;

  constructor(
     private navCtrl: Router,private storage: Storage
  ) {
     this.storage.create();

  }
   
  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    return await this.checkAuth();
  }

  private async checkAuth() {
    // this.storage.create().then(async () => {
    //   // Now you can perform operations on the storage
     
    // });
   let authed = await this.storage.get('isLoggedIn');
   // let authed=false;
    return authed || this.routeToLogin();
  
  }

  private routeToLogin(): boolean {
    this.navCtrl.navigate(['login']);
    return false;
  }
}
