import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Proveedor5PageRoutingModule } from './proveedor5-routing.module';

import { Proveedor5Page } from './proveedor5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Proveedor5PageRoutingModule
  ],
  declarations: [Proveedor5Page]
})
export class Proveedor5PageModule {}
