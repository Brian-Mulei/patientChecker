import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router,NavigationExtras} from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ApiService } from '../services/api/api.service';
import { switchMap } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, timer } from 'rxjs'
@Component({
  selector: 'app-sub-patient',
  templateUrl: './sub-patient.page.html',
  styleUrls: ['./sub-patient.page.scss'],
})
export class SubPatientPage implements OnInit {
  data: any;

  constructor(private route: ActivatedRoute, private router: Router,private alertController: AlertController,private api :ApiService) {}

  ngOnInit() {
    const state = window.history.state;

    console.log('hey')
 
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state['itemData'];
      }
    });
  }

  onItemClick(senddata) {
    let navigationExtras: NavigationExtras = {
      state: {
        itemData: senddata
      }
    };
    this.router.navigate(['/edit-patient'], navigationExtras);    
   
  }

  async presentDeleteConfirm(id: number) {
    const alert = await this.alertController.create({
      header: 'Confirm Deletion',
      message: 'Are you sure you want to delete this Patient? It CANNOT be undone',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            // User clicked the "Cancel" button
            alert.dismiss(); // Close the alert box
          return false; 
          }
        }, {
          text: 'Delete',
          handler: () => {
            this.deleteItem(id);
          }
        }
      ]
    });
  
    await alert.present();
  }
  private delay(ms: number): Observable<any> {
    return timer(ms);
  }
  deleteItem(id: number) {
    // Make your delete request here
     // Replace the console.log with your actual HTTP request
    this.api.deletePatient(id).subscribe(
      (response)=> {
       
              this.router.navigate(['/patient']);
        

     },
     (error) =>{
      this.router.navigate(['/patient']);

      console.log(error)
     }
     )
  }


  
}
