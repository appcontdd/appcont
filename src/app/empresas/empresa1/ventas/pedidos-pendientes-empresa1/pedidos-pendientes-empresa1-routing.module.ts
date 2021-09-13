import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PedidosPendientesEmpresa1Page } from './pedidos-pendientes-empresa1.page';

const routes: Routes = [
  {
    path: '',
    component: PedidosPendientesEmpresa1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedidosPendientesEmpresa1PageRoutingModule {}
