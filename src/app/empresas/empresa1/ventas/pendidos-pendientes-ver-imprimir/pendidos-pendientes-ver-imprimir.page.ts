import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pendidos-pendientes-ver-imprimir',
  templateUrl: './pendidos-pendientes-ver-imprimir.page.html',
  styleUrls: ['./pendidos-pendientes-ver-imprimir.page.scss'],
})
export class PendidosPendientesVerImprimirPage implements OnInit {

  public cliente = [{id:1, nombreCliente:"Patricia Mosquera", esEmpresa:true, telefono:"321702",
                     celular:"3217028011", di:"1088336464",direccion:"Cr 10 N 61-17", obs:"Ninguna", email:"miguelpaez9612@gmail.com"},
                     ];

  public productos = [{id:1, nombreProducto:"Teclado Gamer", detalle:"gamer XD", proveedorId:1,valorVentaUni:55600, cantProduct:2,
                      valorTotalVent:111200},
                      {id:2, nombreProducto:"Mouse", detalle:"gamer XD", proveedorId:1, valorVentaUni:40600, cantProduct:1,
                      valorTotalVent:40600},
                      {id:2, nombreProducto:"Mouse", detalle:"gamer XD", proveedorId:1, valorVentaUni:40600, cantProduct:1,
                      valorTotalVent:40600}];

  public entrega = [{refEntrega:"RefEntCl1Em1",numrefEntrega:"",guiaEntrega:"65438468",transportista:"Servientrega",
                    urlEntrega:"www.servientrega.com",urlUbicacion:"djkjaksd"}];

  constructor() { 
    
  }

  ngOnInit() {
  }

  
}

