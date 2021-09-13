import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroDeVentaEmpresa1Page } from './registro-de-venta-empresa1.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroDeVentaEmpresa1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroDeVentaEmpresa1PageRoutingModule {}
