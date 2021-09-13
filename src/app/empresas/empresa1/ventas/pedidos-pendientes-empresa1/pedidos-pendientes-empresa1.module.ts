import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PedidosPendientesEmpresa1PageRoutingModule } from './pedidos-pendientes-empresa1-routing.module';

import { PedidosPendientesEmpresa1Page } from './pedidos-pendientes-empresa1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PedidosPendientesEmpresa1PageRoutingModule
  ],
  declarations: [PedidosPendientesEmpresa1Page],
  exports: [
    PedidosPendientesEmpresa1Page
  ]
})
export class PedidosPendientesEmpresa1PageModule {}
