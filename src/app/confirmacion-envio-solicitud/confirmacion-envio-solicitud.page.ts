import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-confirmacion-envio-solicitud',
  templateUrl: './confirmacion-envio-solicitud.page.html',
  styleUrls: ['./confirmacion-envio-solicitud.page.scss'],
})
export class ConfirmacionEnvioSolicitudPage implements OnInit {

  constructor(private wowService: NgwWowService) {
    this.wowService.init(); 
   }
  ngOnInit() {
    this.wowService.init(); 
    
  }

}
