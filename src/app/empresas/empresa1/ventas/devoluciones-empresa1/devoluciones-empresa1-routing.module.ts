import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevolucionesEmpresa1Page } from './devoluciones-empresa1.page';

const routes: Routes = [
  {
    path: '',
    component: DevolucionesEmpresa1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevolucionesEmpresa1PageRoutingModule {}
