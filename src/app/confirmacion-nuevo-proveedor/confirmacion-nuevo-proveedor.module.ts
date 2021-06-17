import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmacionNuevoProveedorPageRoutingModule } from './confirmacion-nuevo-proveedor-routing.module';

import { ConfirmacionNuevoProveedorPage } from './confirmacion-nuevo-proveedor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmacionNuevoProveedorPageRoutingModule
  ],
  declarations: [ConfirmacionNuevoProveedorPage]
})
export class ConfirmacionNuevoProveedorPageModule {}
