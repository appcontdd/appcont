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
  
 

}
