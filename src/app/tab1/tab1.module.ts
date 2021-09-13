import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HeaderEmpresasPageModule } from '../header-empresas/header-empresas.module';
import { HomeVentasEmpresa1PageModule } from '../empresas/empresa1/ventas/home-ventas-empresa1/home-ventas-empresa1.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule,
    MDBBootstrapModule.forRoot(),
    HeaderEmpresasPageModule,
    HomeVentasEmpresa1PageModule,
  ],
  declarations: [Tab1Page],
  
  exports: [
    Tab1Page
  ]
})
export class Tab1PageModule {}
