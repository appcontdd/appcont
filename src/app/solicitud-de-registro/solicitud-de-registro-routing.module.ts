import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolicitudDeRegistroPage } from './solicitud-de-registro.page';

const routes: Routes = [
  {
    path: '',
    component: SolicitudDeRegistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitudDeRegistroPageRoutingModule {}
