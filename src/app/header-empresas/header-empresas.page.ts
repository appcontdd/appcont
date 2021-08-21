import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-empresas',
  templateUrl: './header-empresas.page.html',
  styleUrls: ['./header-empresas.page.scss'],
})
export class HeaderEmpresasPage implements OnInit {

  public empresasTitles : [{title:"Dinastía Digital - Market Place", urlImg: ""},{title:"Dinastía Digital", urlImg: ""},];

  public lista1 = [{title:"Dinastía Digital - Market Place", urlImg:"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"},{title:"DD - Servi Computo", urlImg:""},
  {title:"DD - AppCont", urlImg:""}, {title:"Empresa 4", urlImg:""}, {title:"Empresa 5", urlImg:""}];

  public lista2 =[{title:"Empresa 6", urlImg:""}, {title:"Empresa 7", urlImg:""}, {title:"Empresa 8", urlImg:""},
  {title:"Empresa 9", urlImg:""}, {title:"Empresa 10", urlImg:""}];

  public lista3 = [{title:"Empresa 11", urlImg:""}, 
  {title:"Empresa 12", urlImg:""}, {title:"Empresa 13", urlImg:""}, {title:"Empresa 14", urlImg:""}, 
  {title:"Empresa 15", urlImg:""}];

  public lista4 = [ {title:"Empresa 16", urlImg:""}, {title:"Empresa 17", urlImg:""}, 
  {title:"Empresa 18", urlImg:""}, {title:"Empresa 19", urlImg:""}, {title:"Empresa 20", urlImg:""}];
  
  

  constructor() { }

  ngOnInit() {
  }

}
