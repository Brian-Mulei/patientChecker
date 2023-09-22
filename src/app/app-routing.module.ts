import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
   },
   {
    path: 'home/upload',
redirectTo:'upload'  },
  {
    path: 'upload/home',
redirectTo:"home" 
  },
  {
    path: 'home/patient',
redirectTo:"patient" 
  },
  {
    path: 'upload/patient',
redirectTo:"patient" 
  },
  {
    path: 'patient/upload',
redirectTo:'upload'  },
  {
    path: 'patient/home',
redirectTo:"home" 
  },

  {
    path: 'patient/file',
redirectTo:"file" 
  },

  {
    path: 'home/file',
redirectTo:'file'
 },
 {
  path: 'uplaod/file',
redirectTo:"file" 
},
{
  path: 'file/patient',
redirectTo:"patient" 
},
{
  path: 'file/upload',
redirectTo:'upload'  },
{
  path: 'file/home',
redirectTo:"home" 
},

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
 
  },
  {
    path: 'upload',
    loadChildren: () => import('./upload/upload.module').then( m => m.UploadPageModule)
  },
  {
    path: 'patient',
    loadChildren: () => import('./patient/patient.module').then( m => m.PatientPageModule)
  },
  {
    path: 'file',
    loadChildren: () => import('./file-uploader/file-uploader.module').then( m => m.FileUploaderPageModule)
  },
  {
    path: 'sub-patient',
    loadChildren: () => import('./sub-patient/sub-patient.module').then( m => m.SubPatientPageModule)
  },
  {
    path: 'edit-patient',
    loadChildren: () => import('./edit-patient/edit-patient.module').then( m => m.EditPatientPageModule)
  },
  {
    path: 'new-patient',
    loadChildren: () => import('./new-patient/new-patient.module').then( m => m.NewPatientPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
