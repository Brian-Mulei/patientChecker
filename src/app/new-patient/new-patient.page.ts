import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api/api.service';
import { ActivatedRoute ,Router,NavigationExtras} from '@angular/router';

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
  editData(){
     this.editformData.FirstName= this.data.FirstName,
    this.editformData.LastName= this.data.LastName,
    this.editformData.DateOfBirth= this.data.DateOfBirth,
    this.editformData.Gender= this.selectedItem,
    this.editformData.ContactNumber= this.data.ContactNumber,
    this.editformData.Address= this.data.Address
   
     
     this.api.createPatient(this.editformData).subscribe(
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
