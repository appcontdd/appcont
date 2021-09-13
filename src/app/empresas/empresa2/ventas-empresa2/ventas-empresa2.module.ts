import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VentasEmpresa2PageRoutingModule } from './ventas-empresa2-routing.module';

import { VentasEmpresa2Page } from './ventas-empresa2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VentasEmpresa2PageRoutingModule
  ],
  declarations: [VentasEmpresa2Page]
})
export class VentasEmpresa2PageModule {}
