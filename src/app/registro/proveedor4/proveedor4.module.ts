import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Proveedor4PageRoutingModule } from './proveedor4-routing.module';

import { Proveedor4Page } from './proveedor4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Proveedor4PageRoutingModule
  ],
  declarations: [Proveedor4Page]
})
export class Proveedor4PageModule {}
