import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { LogoComponent } from './logo/logo.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
@NgModule({
  declarations: [
    LogoComponent,
    BottomBarComponent
  ],
  
  imports: [
    IonicModule,
    CommonModule
  ],
  exports:[
    LogoComponent,
    BottomBarComponent
  ]

})
export class ComponentsModule { }
