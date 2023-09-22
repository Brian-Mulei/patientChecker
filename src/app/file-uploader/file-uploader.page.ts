import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { ApiService } from '../services/api/api.service';
import { Router } from '@angular/router';

import { switchMap } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Observable, timer } from 'rxjs'
@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.page.html',
  styleUrls: ['./file-uploader.page.scss'],
})
export class FileUploaderPage implements OnInit {

  constructor(private api:ApiService, private router:Router) { }
   baseImageUrl: string = 'http://127.0.0.1:8000/storage/';

  isLoading: boolean;
  error: string;
  uploadedFiles: any[] = [];


  private delay(ms: number): Observable<any> {
    return timer(ms);
  }
  ngOnInit() {
    this.isLoading = true;

    this.api.getFiles().subscribe((data) => {
      this.uploadedFiles = data;

      console.log(this.uploadedFiles)

      console.log(this.baseImageUrl+'/'+this.uploadedFiles[1].image)
      this.isLoading = false;

    },(error) => {
      this.isLoading = false;
      this.error = 'An error occurred while fetching data';
      console.log('Error:', error);
    } 
  
    );
  }



  uploadPhoto(fileChangeEvent) {
    this.isLoading = true;

    // Get a reference to the file that has just been added to the input
    const photo = fileChangeEvent.target.files[0];
    // Create a form data object using the FormData API
    let formData = new FormData();
    // Add the file that was just added to the form data
    formData.append("image", photo, photo.name);
    formData.append("name",  photo.name);

    // POST formData to server using HttpClient

    this.api.uploadFiles(formData).subscribe(
      (response) => {
              this.isLoading = false;

        console.log('  submitted successfully!', response);

        this.delay(2000).pipe(
          switchMap(()=>
        this.router.navigate(['/file'])));

      },
      (error) => {
        this.isLoading = false;

        console.error('Error submitting form:', error);
        this.delay(2000).pipe(
          switchMap(()=>
        this.router.navigate(['/file'])));

      }
    );
  }
  public alertButtons = ['OK'];


  deletePhoto(id){





  }
  
}
