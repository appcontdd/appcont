import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-solicitud-de-registro',
  templateUrl: './solicitud-de-registro.page.html',
  styleUrls: ['./solicitud-de-registro.page.scss'],
})
export class SolicitudDeRegistroPage implements OnInit {

  constructor(private wowService: NgwWowService) {
    this.wowService.init(); 
   }

   ngOnInit() {
    this.wowService.init(); 
  }

}
