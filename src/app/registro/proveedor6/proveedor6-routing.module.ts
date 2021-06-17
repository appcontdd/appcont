import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Proveedor6Page } from './proveedor6.page';

const routes: Routes = [
  {
    path: '',
    component: Proveedor6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Proveedor6PageRoutingModule {}
