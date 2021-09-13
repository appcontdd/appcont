import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntregasPendientesEmpresa1PageRoutingModule } from './entregas-pendientes-empresa1-routing.module';

import { EntregasPendientesEmpresa1Page } from './entregas-pendientes-empresa1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntregasPendientesEmpresa1PageRoutingModule
  ],
  declarations: [EntregasPendientesEmpresa1Page],
  exports: [
    EntregasPendientesEmpresa1Page
  ]
})
export class EntregasPendientesEmpresa1PageModule {}
