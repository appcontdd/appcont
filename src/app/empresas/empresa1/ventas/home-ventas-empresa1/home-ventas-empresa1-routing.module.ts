import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeVentasEmpresa1Page } from './home-ventas-empresa1.page';

const routes: Routes = [
  {
    path: '',
    component: HomeVentasEmpresa1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeVentasEmpresa1PageRoutingModule {}
