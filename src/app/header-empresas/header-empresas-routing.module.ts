import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderEmpresasPage } from './header-empresas.page';

const routes: Routes = [
  {
    path: '',
    component: HeaderEmpresasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeaderEmpresasPageRoutingModule {}
