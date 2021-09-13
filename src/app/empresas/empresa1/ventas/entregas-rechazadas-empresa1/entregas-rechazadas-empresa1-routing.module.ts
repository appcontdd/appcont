import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntregasRechazadasEmpresa1Page } from './entregas-rechazadas-empresa1.page';

const routes: Routes = [
  {
    path: '',
    component: EntregasRechazadasEmpresa1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntregasRechazadasEmpresa1PageRoutingModule {}
