import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FileUploaderPage } from './file-uploader.page';

const routes: Routes = [
  {
    path: '',
    component: FileUploaderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FileUploaderPageRoutingModule {}
