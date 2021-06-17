import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Proveedor6PageRoutingModule } from './proveedor6-routing.module';

import { Proveedor6Page } from './proveedor6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Proveedor6PageRoutingModule
  ],
  declarations: [Proveedor6Page]
})
export class Proveedor6PageModule {}
