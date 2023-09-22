import { Component, OnInit } from '@angular/core';
import { CameraService } from '../services/camera/camera.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.page.html',
  styleUrls: ['./upload.page.scss'],
})
export class UploadPage implements OnInit {

  constructor(public camera: CameraService) { }

  async ngOnInit() {
    await this.camera.loadSaved();

  }
  addPhotoToGallery() {
    this.camera.addNewToGallery();
  }
}
