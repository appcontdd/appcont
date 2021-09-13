import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntregasRechazadasEmpresa1PageRoutingModule } from './entregas-rechazadas-empresa1-routing.module';

import { EntregasRechazadasEmpresa1Page } from './entregas-rechazadas-empresa1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntregasRechazadasEmpresa1PageRoutingModule
  ],
  declarations: [EntregasRechazadasEmpresa1Page],
  exports: [
    EntregasRechazadasEmpresa1Page
  ]
})
export class EntregasRechazadasEmpresa1PageModule {}
