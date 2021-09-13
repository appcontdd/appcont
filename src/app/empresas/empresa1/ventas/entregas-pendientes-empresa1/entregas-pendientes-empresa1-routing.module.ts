import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntregasPendientesEmpresa1Page } from './entregas-pendientes-empresa1.page';

const routes: Routes = [
  {
    path: '',
    component: EntregasPendientesEmpresa1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntregasPendientesEmpresa1PageRoutingModule {}
