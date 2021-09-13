import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroDePedidoEmpresa1PageRoutingModule } from './registro-de-pedido-empresa1-routing.module';

import { RegistroDePedidoEmpresa1Page } from './registro-de-pedido-empresa1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroDePedidoEmpresa1PageRoutingModule
  ],
  declarations: [RegistroDePedidoEmpresa1Page]
})
export class RegistroDePedidoEmpresa1PageModule {}
