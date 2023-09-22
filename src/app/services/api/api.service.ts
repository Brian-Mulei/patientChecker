import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, timer } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://127.0.0.1:8000/api';  
   options = {
    headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
};

  constructor(private http: HttpClient) { }


  private delay(ms: number): Observable<any> {
    return timer(ms);
  }
  getData(): Observable<any[]> {
    return   this.delay(2000).pipe(
      switchMap(() =>this.http.get<any[]>(this.apiUrl +"/patients"))
    )   
  }

  uploadFiles(formData:FormData) {
    return  this.http.post<any[]>(this.apiUrl+"/image", formData )
  }

  getFiles(): Observable<any[]> {
    return   this.delay(2000).pipe(
      switchMap(() =>this.http.get<any[]>(this.apiUrl +"/image"))
    )   
  }


  createPatient(formData: any){
    return  this.http.post<any[]>(this.apiUrl+"/patients", formData )

  }

  editPatient(formData:any,id:any){
    console.log(formData)
    return  this.http.patch<any[]>(this.apiUrl+"/patients/"+id, formData ,this.options)

  }

  deletePatient(id:any){
    return  this.http.delete<any[]>(this.apiUrl+"/patients/"+id  )

  }

}
