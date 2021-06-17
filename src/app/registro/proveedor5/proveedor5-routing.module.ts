import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Proveedor5Page } from './proveedor5.page';

const routes: Routes = [
  {
    path: '',
    component: Proveedor5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Proveedor5PageRoutingModule {}
