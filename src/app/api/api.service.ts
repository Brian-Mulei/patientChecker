import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiURL ='http://127.0.0.1:8000/api'
  constructor(private http: HttpClient) { }


  checkLogin(formData:any){

   this.apiURL= this.apiURL +'/' +'login'

return this.http.post(this.apiURL,formData);

  }

}
