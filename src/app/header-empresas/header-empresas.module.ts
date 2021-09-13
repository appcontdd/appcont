import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeaderEmpresasPageRoutingModule } from './header-empresas-routing.module';

import { HeaderEmpresasPage } from './header-empresas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderEmpresasPageRoutingModule,
    
  ],

  declarations: [HeaderEmpresasPage],

  exports: [
    HeaderEmpresasPage
  ]
})
export class HeaderEmpresasPageModule {}
