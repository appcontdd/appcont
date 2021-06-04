import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-login-page-proveedor',
  templateUrl: './login-page-proveedor.page.html',
  styleUrls: ['./login-page-proveedor.page.scss'],
})
export class LoginPageProveedorPage implements OnInit {

  constructor(private wowService: NgwWowService) {
    this.wowService.init(); 
   }

  ngOnInit() {
    this.wowService.init(); 
  }

}
