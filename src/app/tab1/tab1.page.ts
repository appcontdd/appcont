import { Component } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { NgwWowService } from 'ngx-wow';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
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