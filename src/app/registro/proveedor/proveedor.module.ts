import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProveedorPageRoutingModule } from './proveedor-routing.module';

import { ProveedorPage } from './proveedor.page';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgwWowModule } from 'ngx-wow';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProveedorPageRoutingModule,
    MDBBootstrapModule.forRoot(),
    NgwWowModule,
  ],
  declarations: [ProveedorPage]
})
export class ProveedorPageModule {}
