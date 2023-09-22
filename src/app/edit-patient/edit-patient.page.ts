import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router,NavigationExtras} from '@angular/router';
import { ApiService } from '../services/api/api.service';
@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.page.html',
  styleUrls: ['./edit-patient.page.scss'],
})
export class EditPatientPage implements OnInit {

  data: any;
  sending :Boolean
  selectedItem: string;

  editformData = [{
     FirstName: "",
    LastName: " ",
    DateOfBirth:null,
    Gender: " ",
    ContactNumber: null, 
    Address:  ""
  }];
  options = [
    { id: 1, name: 'Male' },
    { id: 2, name: 'Female' },
   ];

  constructor(private route: ActivatedRoute, private router: Router,private api: ApiService) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state['itemData'];
      }
      console.log(this.data)
    });
  }
  onItemSelected(event: any) {
    this.selectedItem = event.detail.value;
  }


  editData(){
    this.editformData.push({
      FirstName: this.data.FirstName,
      LastName: this.data.LastName,
      DateOfBirth: this.data.DateOfBirth,
      Gender: this.selectedItem,
      ContactNumber: this.data.ContactNumber,
      Address: this.data.Address
     });
     
     this.api.editPatient(this.editformData,this.data.PatientID).subscribe(
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
