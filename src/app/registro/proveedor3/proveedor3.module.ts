import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Proveedor3PageRoutingModule } from './proveedor3-routing.module';

import { Proveedor3Page } from './proveedor3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Proveedor3PageRoutingModule
  ],
  declarations: [Proveedor3Page]
})
export class Proveedor3PageModule {}
