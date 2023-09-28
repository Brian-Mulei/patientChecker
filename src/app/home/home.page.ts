import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router :Router,private storage :Storage) {

    this.storage.create();
  }
   


  async logout() {
    // Perform logout actions (e.g., clear authentication token, reset user data)
    // ...
  
    // Redirect to the login page
    await this.storage.set('isLoggedIn', false);

    this.router.navigate(['/login']);
  }
}
