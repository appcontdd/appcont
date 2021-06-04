import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageProveedorPageRoutingModule } from './login-page-proveedor-routing.module';

import { LoginPageProveedorPage } from './login-page-proveedor.page';
import { NgwWowModule } from 'ngx-wow';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageProveedorPageRoutingModule,
    MDBBootstrapModule.forRoot(),
    NgwWowModule,
  ],
  declarations: [LoginPageProveedorPage]
})
export class LoginPageProveedorPageModule {}
