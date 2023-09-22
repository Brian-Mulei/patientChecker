import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import { LoadingController } from '@ionic/angular';
 import { ToastController } from '@ionic/angular';
  import { Router } from '@angular/router';
  import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formData = {
    username: '',
    password: ''
  };
 


  constructor(private api: ApiService, private storage: Storage,private loadingCtrl: LoadingController,
    
    private router: Router, private toastController: ToastController) { }

  ngOnInit() {
  }
  resetForm() {
    this.formData = { // Reset formData object to initial state
      username: '',
      password: ''
    };
  }



  async login(formData: any) {

    const loading = await this.loadingCtrl.create({
      message: 'Logging in...Please Wait',
    });
    loading.present();

    const toast = await this.toastController.create({
      message: 'Welcome Back',
      duration: 1500,
      position: 'middle',
    });

    this.api.checkLogin(formData).subscribe(
      async (response: any) => {

        this.resetForm(); // Call the resetForm function

        loading.dismiss();

        await toast.present();

        console.log('Login successful');

        this.storage.create().then(async () => {
          // Now you can perform operations on the storage
          await this.storage.set('isLoggedIn', true);

        });
     


        this.router.navigate(['/home']);

      },
      async (error) => {
        this.resetForm(); // Call the resetForm function

        loading.dismiss();
        console.error('Error Try Again:', error);
        const loadg = await this.loadingCtrl.create({
          message: 'Wrong Credentials',
          duration: 1000
        });
        loadg.present();
        //  this.router.navigate(['/patients']);

      }
    );

  }
}
function presentToast() {
  throw new Error('Function not implemented.');
}

