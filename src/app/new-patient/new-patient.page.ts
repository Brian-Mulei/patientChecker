import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api/api.service';
import { ActivatedRoute ,Router,NavigationExtras} from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, timer } from 'rxjs'
@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.page.html',
  styleUrls: ['./new-patient.page.scss'],
})
export class NewPatientPage implements OnInit {

  data: any;
  sending :Boolean
  selectedItem: string;

  editformData = {
    FirstName: "",
   LastName: " ",
   DateOfBirth:null,
   Gender: " ",
   ContactNumber: null, 
   Address:  ""
 };
 constructor(private route: ActivatedRoute, private router: Router,private api: ApiService) {}

  ngOnInit() {

  }
  onItemSelected(event: any) {
    this.selectedItem = event.detail.value;
  }
  private delay(ms: number): Observable<any> {
    return timer(ms);
  }
  editData(){ 
    this.editformData.Gender= this.selectedItem, 
   
     
     this.api.createPatient(this.editformData).subscribe(
      (response)=> {

        this.editformData = {
          FirstName: "",
         LastName: " ",
         DateOfBirth:null,
         Gender: " ",
         ContactNumber: null, 
         Address:  ""
       };

       return   this.delay(2000).pipe(
        switchMap(() =>  this.router.navigate(['/patient'])
        )
      )   
       


     },
     (error) =>{
      this.router.navigate(['/patient']);

      console.log(error)
     }
     )

  }

}
