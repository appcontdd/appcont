import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolicitudDeRegistroPageRoutingModule } from './solicitud-de-registro-routing.module';

import { SolicitudDeRegistroPage } from './solicitud-de-registro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolicitudDeRegistroPageRoutingModule
  ],
  declarations: [SolicitudDeRegistroPage]
})
export class SolicitudDeRegistroPageModule {}
