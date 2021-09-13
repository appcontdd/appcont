import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VentasEmpresa1PageRoutingModule } from './ventas-empresa1-routing.module';

import { VentasEmpresa1Page } from './ventas-empresa1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VentasEmpresa1PageRoutingModule
  ],
  declarations: [VentasEmpresa1Page],
  exports: [
    VentasEmpresa1Page
  ]
})
export class VentasEmpresa1PageModule {}
