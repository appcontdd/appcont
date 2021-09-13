import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PedidosRechazadosEmpresa1Page } from './pedidos-rechazados-empresa1.page';

const routes: Routes = [
  {
    path: '',
    component: PedidosRechazadosEmpresa1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedidosRechazadosEmpresa1PageRoutingModule {}
