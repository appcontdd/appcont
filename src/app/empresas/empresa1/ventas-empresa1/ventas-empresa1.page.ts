import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-ventas-empresa1',
  templateUrl: './ventas-empresa1.page.html',
  styleUrls: ['./ventas-empresa1.page.scss'],
})
export class VentasEmpresa1Page implements OnInit {

  //Cantidad de pedidos, entregas, ventas o devoluciones
  public numPedidosPendientes = [{numero:10}];
  public numPedidosRechazados = [{numero:9}];
  public numEntregasPendientes = [{numero:8}];
  public numEntregasRechazadas = [{numero:7}];
  public numVentas = [{numero:6}];
  public numDevoluciones = [{numero:5}];

  
  
  public cantPedidos = [{numPendientes:5,numRechazados:2}]
  public id?:string; public nombre?:string; public descripcion?:string;
  public lista = [{id:1,nombreEmpresa:"Dinastía Digital - Market Place", imgLogo:"",Nit:"1088336464-8", actividadEcon:"Comercio Electrónico",
  dirEmpresa:"Cr 10 N.61-13", celularEmpresa:"3217028011", telefonoEmpresa:"3217028011",paisEmpresa:"Colombia", departEmpresa:"Risaralda",
  ciudadEmpresa:"Pereira"},
  {id:2,nombreEmpresa:"Dinastía Digital - Servicio de computo", imgLogo:"",Nit:"1088336464-8", actividadEcon:"Reparación, Mantenimiento de software y hardware en equipos de computo",
  dirEmpresa:"Cr 10 N.61-13", celularEmpresa:"3217028011", telefonoEmpresa:"3217028011",paisEmpresa:"Colombia", departEmpresa:"Risaralda",
  ciudadEmpresa:"Pereira"}];
  // Empresas
  public empresas = [{idEmpresa:1, nombreEmpresa:'Dinastía Digital', nit:'1088336464-8',
   direccion:'Cr 10 N.61-13', ciudad:'Pereira', departamento:'Risaralda',pais:'Colombia'} ]

  constructor(public menu: MenuController, public alertController: AlertController, private wowService: NgwWowService) { }

  ngOnInit() {
  }

}
