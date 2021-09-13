import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VentasEmpresa2Page } from './ventas-empresa2.page';

const routes: Routes = [
  {
    path: '',
    component: VentasEmpresa2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VentasEmpresa2PageRoutingModule {}
