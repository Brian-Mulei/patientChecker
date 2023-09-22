import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FileUploaderPageRoutingModule } from './file-uploader-routing.module';

import { FileUploaderPage } from './file-uploader.page';
import { ComponentsModule } from '../components/components.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FileUploaderPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FileUploaderPage]
})
export class FileUploaderPageModule {}
