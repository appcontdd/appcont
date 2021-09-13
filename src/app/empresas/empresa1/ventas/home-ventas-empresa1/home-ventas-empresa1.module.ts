import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeVentasEmpresa1PageRoutingModule } from './home-ventas-empresa1-routing.module';

import { HomeVentasEmpresa1Page } from './home-ventas-empresa1.page';
import { PedidosPendientesEmpresa1PageModule } from '../pedidos-pendientes-empresa1/pedidos-pendientes-empresa1.module';
import { PedidosRechazadosEmpresa1PageModule } from '../pedidos-rechazados-empresa1/pedidos-rechazados-empresa1.module';
import { EntregasPendientesEmpresa1PageModule } from '../entregas-pendientes-empresa1/entregas-pendientes-empresa1.module';
import { EntregasRechazadasEmpresa1PageModule } from '../entregas-rechazadas-empresa1/entregas-rechazadas-empresa1.module';
import { VentasEmpresa1PageModule } from '../ventas-empresa1/ventas-empresa1.module';
import { DevolucionesEmpresa1PageModule } from '../devoluciones-empresa1/devoluciones-empresa1.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeVentasEmpresa1PageRoutingModule,
    PedidosPendientesEmpresa1PageModule,
    PedidosRechazadosEmpresa1PageModule,
    EntregasPendientesEmpresa1PageModule,
    EntregasRechazadasEmpresa1PageModule,
    VentasEmpresa1PageModule,
    DevolucionesEmpresa1PageModule,
  ],
  declarations: [HomeVentasEmpresa1Page],
  exports: [
    HomeVentasEmpresa1Page
  ]
})
export class HomeVentasEmpresa1PageModule {}
