import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PedidosRechazadosEmpresa1PageRoutingModule } from './pedidos-rechazados-empresa1-routing.module';

import { PedidosRechazadosEmpresa1Page } from './pedidos-rechazados-empresa1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PedidosRechazadosEmpresa1PageRoutingModule
  ],
  declarations: [PedidosRechazadosEmpresa1Page],
  exports: [
    PedidosRechazadosEmpresa1Page
  ]
})
export class PedidosRechazadosEmpresa1PageModule {}
