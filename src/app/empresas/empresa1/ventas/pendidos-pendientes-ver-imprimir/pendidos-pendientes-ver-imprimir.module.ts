import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PendidosPendientesVerImprimirPageRoutingModule } from './pendidos-pendientes-ver-imprimir-routing.module';

import { PendidosPendientesVerImprimirPage } from './pendidos-pendientes-ver-imprimir.page';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PendidosPendientesVerImprimirPageRoutingModule,
    MDBBootstrapModule.forRoot(),

  ],
  declarations: [PendidosPendientesVerImprimirPage]
})
export class PendidosPendientesVerImprimirPageModule {}
