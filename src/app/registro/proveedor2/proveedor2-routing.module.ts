import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Proveedor2Page } from './proveedor2.page';

const routes: Routes = [
  {
    path: '',
    component: Proveedor2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Proveedor2PageRoutingModule {}
