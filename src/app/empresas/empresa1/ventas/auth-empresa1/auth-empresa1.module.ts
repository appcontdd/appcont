import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthEmpresa1PageRoutingModule } from './auth-empresa1-routing.module';

import { AuthEmpresa1Page } from './auth-empresa1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthEmpresa1PageRoutingModule
  ],
  declarations: [AuthEmpresa1Page]
})
export class AuthEmpresa1PageModule {}
