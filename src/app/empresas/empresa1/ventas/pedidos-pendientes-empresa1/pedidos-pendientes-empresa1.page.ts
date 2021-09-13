import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedidos-pendientes-empresa1',
  templateUrl: './pedidos-pendientes-empresa1.page.html',
  styleUrls: ['./pedidos-pendientes-empresa1.page.scss'],
})
export class PedidosPendientesEmpresa1Page implements OnInit {

  public pedidosPendientes = [{referencia:"REFCL1EM1PD",id:1,fecha:"20/08/2021 18:11",canProducts:3,nomCliente:"Patricia Mosquera",celCliente:"3217028011"},{referencia:"REFCL1EM1PD",id:2,fecha:"04/09/2021 18:11",canProducts:3,nomCliente:"Miguel Paez",celCliente:"3217028011"}];


  //Estos datos se trae de la base de datos permisos
  public permisoEditar = [{editar:true}];
  public permisoVerImprimir = [{verImp:true}];
  public permisoRechazar = [{rechazar:true}];
  public permisoDespachar = [{despachar:true}];

  //Se declaran estas variables falsas para realizar condiciones cuando se inicia
  public perEdi = false;
  public perVer = false;
  public perRec = false;
  public perDes = false;

  constructor() { 
    
  }

  ngOnInit() {
    //Condicion permiso de editar
    let a = this.permisoEditar;
    let b = a[0];
    let c = b.editar;
    if (c==true){
      this.perEdi = true;
    }
    else {
      this.perEdi = false;
    }

    //Condicion permiso de Ver y Imprimir
    let d = this.permisoVerImprimir;
    let e = d[0];
    let f = e.verImp;
    if (f==true){
      this.perVer = true;
    }
    else {
      this.perVer = false;
    }

    //Condicion permiso de Rechazar
    let g = this.permisoRechazar;
    let h = g[0];
    let i = h.rechazar;
    if (i==true){
      this.perRec = true;
    }
    else {
      this.perRec = false;
    }

    //Condicion permiso de Despachar
    let j = this.permisoDespachar;
    let k = j[0];
    let l = k.despachar;
    if (l==true){
      this.perDes = true;
    }
    else {
      this.perDes = false;
    }
    
    
  }

}
