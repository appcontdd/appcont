import { Component, OnInit } from '@angular/core';
import { SolicitudProveedor } from '../model/solicitud-proveedor';
import { SolicitudProveedorService } from 'src/app/services/solicitud-proveedor.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-solicitud-de-registro',
  templateUrl: './solicitud-de-registro.page.html',
  styleUrls: ['./solicitud-de-registro.page.scss'],
})
export class SolicitudDeRegistroPage implements OnInit {
  
  
  solicitud: SolicitudProveedor = new SolicitudProveedor();
  submitted = false;

  constructor(private tutorialService: SolicitudProveedorService, public alertController: AlertController, public router: Router,private wowService: NgwWowService) {
    this.wowService.init(); 
   }
  

  ngOnInit(): void {
    this.wowService.init(); 
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Deseas enviar solicitud de Registro!',
      subHeader: 'por favor validar su correo electrónico para continuar el proceso!!!',
      message: 'Este proceso será para crear su ecommerce',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Enviar',
          handler: () => {
            this.saveTutorial();
            this.confirmacionSolicitud();
            this.newTutorial();
          }
        }
      ]
    });

    await alert.present();
  }

  
  confirmacionSolicitud(){
    this.router.navigate(["/confirmacion-envio-solicitud"]);
 }
  saveTutorial(): void {
    this.tutorialService.create(this.solicitud).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
    });
  }

  newTutorial(): void {
    this.submitted = false;
    this.solicitud = new SolicitudProveedor();
  }

}
