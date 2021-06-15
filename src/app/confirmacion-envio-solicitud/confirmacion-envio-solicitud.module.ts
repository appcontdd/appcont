import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmacionEnvioSolicitudPageRoutingModule } from './confirmacion-envio-solicitud-routing.module';

import { ConfirmacionEnvioSolicitudPage } from './confirmacion-envio-solicitud.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmacionEnvioSolicitudPageRoutingModule
  ],
  declarations: [ConfirmacionEnvioSolicitudPage]
})
export class ConfirmacionEnvioSolicitudPageModule {}
