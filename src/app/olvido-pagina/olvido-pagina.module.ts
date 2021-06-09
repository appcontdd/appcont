import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OlvidoPaginaPageRoutingModule } from './olvido-pagina-routing.module';

import { OlvidoPaginaPage } from './olvido-pagina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OlvidoPaginaPageRoutingModule
  ],
  declarations: [OlvidoPaginaPage]
})
export class OlvidoPaginaPageModule {}
