import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api/api.service';
import { Router ,NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';

 @Component({
  selector: 'app-patient',
  templateUrl: './patient.page.html',
  styleUrls: ['./patient.page.scss'],
})
export class PatientPage implements OnInit {
  data: any[] ;
  isLoading: boolean;
  error: string;
  constructor(private api :ApiService,private router: Router,) { }

  onItemClick(senddata) {
    let navigationExtras: NavigationExtras = {
      state: {
        itemData: senddata
      }
    };
    this.router.navigate(['/sub-patient'], navigationExtras);    
   
  }

  ngOnInit() {
    this.isLoading = true;

 

    this.api.getData().subscribe((data) => {
      this.data = data;
 
      this.isLoading = false;

    },(error) => {
      this.isLoading = false;
      this.error = 'An error occurred while fetching data';
      console.log('Error:', error);
    } 
  
    );
  }

}
