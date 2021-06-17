import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Proveedor2PageRoutingModule } from './proveedor2-routing.module';

import { Proveedor2Page } from './proveedor2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Proveedor2PageRoutingModule
  ],
  declarations: [Proveedor2Page]
})
export class Proveedor2PageModule {}
