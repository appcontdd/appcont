import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-ventas-empresa1',
  templateUrl: './home-ventas-empresa1.page.html',
  styleUrls: ['./home-ventas-empresa1.page.scss'],
})
export class HomeVentasEmpresa1Page implements OnInit {
  pedidosPendientes = true;

  // Numero de notificaciones
  public numPedidosPendientes = [{numero:10}];
  public numPedidosRechazados = [{numero:9}];
  public numEntregasPendientes = [{numero:8}];
  public numEntregasRechazadas = [{numero:7}];
  public numVentas = [{numero:6}];
  public numDevoluciones = [{numero:5}];
  public cantPedidos = [{numPendientes:5,numRechazados:2}]

  constructor() { }

  ngOnInit() {
  }

}
