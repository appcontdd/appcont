import { Component, OnInit, Input } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { NgwWowService } from 'ngx-wow';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-empresas',
  templateUrl: './header-empresas.page.html',
  styleUrls: ['./header-empresas.page.scss'],
})
export class HeaderEmpresasPage implements OnInit {

  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
  
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

  

  openEmpresas() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
  closeEmpresas() {
    this.menu.close('first');
  }

  openPerfil() {
    this.menu.enable(true, 'second');
    this.menu.open('second');
  }

  closePerfil() {
    this.menu.close('second');
  }

  activarWow(){
    this.wowService.init();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Hola',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }


}
