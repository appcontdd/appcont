import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroDeEntregaEmpresa1PageRoutingModule } from './registro-de-entrega-empresa1-routing.module';

import { RegistroDeEntregaEmpresa1Page } from './registro-de-entrega-empresa1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroDeEntregaEmpresa1PageRoutingModule
  ],
  declarations: [RegistroDeEntregaEmpresa1Page]
})
export class RegistroDeEntregaEmpresa1PageModule {}
