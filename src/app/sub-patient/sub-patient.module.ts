import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubPatientPageRoutingModule } from './sub-patient-routing.module';

import { SubPatientPage } from './sub-patient.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubPatientPageRoutingModule
  ],
  declarations: [SubPatientPage]
})
export class SubPatientPageModule {}
