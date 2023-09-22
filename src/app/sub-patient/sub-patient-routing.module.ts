import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubPatientPage } from './sub-patient.page';

const routes: Routes = [
  {
    path: '',
    component: SubPatientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubPatientPageRoutingModule {}
