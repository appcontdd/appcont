import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PedidosPendientesEditarPage } from './pedidos-pendientes-editar.page';

const routes: Routes = [
  {
    path: '',
    component: PedidosPendientesEditarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedidosPendientesEditarPageRoutingModule {}
