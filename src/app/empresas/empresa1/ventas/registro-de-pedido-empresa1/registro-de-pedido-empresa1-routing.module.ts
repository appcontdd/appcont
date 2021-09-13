import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroDePedidoEmpresa1Page } from './registro-de-pedido-empresa1.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroDePedidoEmpresa1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroDePedidoEmpresa1PageRoutingModule {}
