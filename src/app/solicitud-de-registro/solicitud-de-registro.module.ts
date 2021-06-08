import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolicitudDeRegistroPageRoutingModule } from './solicitud-de-registro-routing.module';

import { SolicitudDeRegistroPage } from './solicitud-de-registro.page';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgwWowModule } from 'ngx-wow';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolicitudDeRegistroPageRoutingModule,
    MDBBootstrapModule.forRoot(),
    NgwWowModule,
    
  ],
  declarations: [SolicitudDeRegistroPage]
})
export class SolicitudDeRegistroPageModule {}
