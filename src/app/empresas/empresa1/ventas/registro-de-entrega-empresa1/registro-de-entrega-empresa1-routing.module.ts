import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroDeEntregaEmpresa1Page } from './registro-de-entrega-empresa1.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroDeEntregaEmpresa1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroDeEntregaEmpresa1PageRoutingModule {}
