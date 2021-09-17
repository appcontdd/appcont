import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
interface User {
  id: number;
  first: string;
  last: string;
}

@Component({
  selector: 'app-pedidos-pendientes-editar',
  templateUrl: './pedidos-pendientes-editar.page.html',
  styleUrls: ['./pedidos-pendientes-editar.page.scss'],
})
export class PedidosPendientesEditarPage  implements OnInit {
  pedidoInput = [];

  pedidoId = [{id:1}];

  personas: Persona[] = [
    new Persona('juan', 33),
    new Persona('ana', 15),
    new Persona('luis', 56),
    new Persona('carla', 45)
  ];

  



  // Todo lo referente al pedido
  public pedido = [
                    // pedido 1 
                    {
                    idPedido:"1",refPedido:"REFPDCLI1EM1",
                    idCliente:"1",nombreCliente:"Patricia",empresaCliente:false,telefonoCliente:"3427738",celularCliente:"3217028011",
                    identidicacionCliente:"1088345465",direccionCliente:"cr10",observacionesCliente:"ninguna",emailCliente:"miguelpaez9612@gmail.com",
                    },
                    // pedido 2
                    {
                      idPedido:"2",refPedido:"REFPDCLI1EM1",
                      idCliente:"2",nombreCliente:"Miguel",empresaCliente:true,telefonoCliente:"3427738",celularCliente:"3217028011",
                      identidicacionCliente:"1088345465",direccionCliente:"cr10",observacionesCliente:"ninguna",emailCliente:"miguelpaez9612@gmail.com",
                    },
                    // pedido 3 
                    {
                      idPedido:"3",refPedido:"REFPDCLI1EM1",
                      idCliente:"3",nombreCliente:"Juan",empresaCliente:false,telefonoCliente:"3427738",celularCliente:"3217028011",
                      identidicacionCliente:"1088345465",direccionCliente:"cr10",observacionesCliente:"ninguna",emailCliente:"miguelpaez9612@gmail.com",
                    }
                  ];

  public cliente = [{id:1, nombreCliente:"Patricia Mosquera", esEmpresa:true, telefono:"321702",
  celular:"3217028011", di:"1088336464",direccion:"Cr 10 N 61-17", obs:"Ninguna", email:"miguelpaez9612@gmail.com"},
  ];
  // Seleccionamos o iniciamos el valor '0' del <select>
  opcionSeleccionado: string  = '0';
  verSeleccion: string        = '';
  capturar() {
    // Pasamos el valor seleccionado a la variable verSeleccion
    this.verSeleccion = this.opcionSeleccionado;
  }

  
  users: User[] = [
  
    {
      id: 1,
      first: 'Alice',
      last: 'Smith',
    },
    {
      id: 2,
      first: 'Bob',
      last: 'Davis',
    },
    {
      id: 3,
      first: 'Charlie',
      last: 'Rosenburg',
    },
    {
      id: 4,
      first: 'Carlos',
      last: 'Buitrago',
    },
    {
      id: 5,
      first: 'David',
      last: 'Davis',
    },
    {
      id: 6,
      first: 'Patricia',
      last: 'Rosenburg',
    },
    
  ];

  compareWith(o1: User, o2: User) {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }

 
  constructor() { }

 
  ngOnInit() {

  }

}

class Persona {
  constructor(public nombre: string, public edad: number) { }
}
