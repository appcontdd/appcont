import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DevolucionesEmpresa1PageRoutingModule } from './devoluciones-empresa1-routing.module';

import { DevolucionesEmpresa1Page } from './devoluciones-empresa1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DevolucionesEmpresa1PageRoutingModule
  ],
  declarations: [DevolucionesEmpresa1Page],
  exports: [
    DevolucionesEmpresa1Page
  ]
})
export class DevolucionesEmpresa1PageModule {}
