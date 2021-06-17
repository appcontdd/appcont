import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmacionNuevoProveedorPage } from './confirmacion-nuevo-proveedor.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmacionNuevoProveedorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmacionNuevoProveedorPageRoutingModule {}
