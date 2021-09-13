import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PedidosPendientesEditarPageRoutingModule } from './pedidos-pendientes-editar-routing.module';

import { PedidosPendientesEditarPage } from './pedidos-pendientes-editar.page';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PedidosPendientesEditarPageRoutingModule,
    MDBBootstrapModule.forRoot(),
  ],
  declarations: [PedidosPendientesEditarPage]
})
export class PedidosPendientesEditarPageModule {}
