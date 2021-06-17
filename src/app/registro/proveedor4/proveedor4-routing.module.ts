import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Proveedor4Page } from './proveedor4.page';

const routes: Routes = [
  {
    path: '',
    component: Proveedor4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Proveedor4PageRoutingModule {}
