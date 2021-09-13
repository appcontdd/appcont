import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthEmpresa1Page } from './auth-empresa1.page';

const routes: Routes = [
  {
    path: '',
    component: AuthEmpresa1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthEmpresa1PageRoutingModule {}
