import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PendidosPendientesVerImprimirPage } from './pendidos-pendientes-ver-imprimir.page';

const routes: Routes = [
  {
    path: '',
    component: PendidosPendientesVerImprimirPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PendidosPendientesVerImprimirPageRoutingModule {}
