import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OlvidoPaginaPage } from './olvido-pagina.page';

const routes: Routes = [
  {
    path: '',
    component: OlvidoPaginaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OlvidoPaginaPageRoutingModule {}
