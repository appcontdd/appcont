import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroDeVentaEmpresa1PageRoutingModule } from './registro-de-venta-empresa1-routing.module';

import { RegistroDeVentaEmpresa1Page } from './registro-de-venta-empresa1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroDeVentaEmpresa1PageRoutingModule
  ],
  declarations: [RegistroDeVentaEmpresa1Page]
})
export class RegistroDeVentaEmpresa1PageModule {}
