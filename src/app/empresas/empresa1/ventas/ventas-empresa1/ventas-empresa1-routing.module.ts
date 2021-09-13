import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VentasEmpresa1Page } from './ventas-empresa1.page';

const routes: Routes = [
  {
    path: '',
    component: VentasEmpresa1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VentasEmpresa1PageRoutingModule {}
