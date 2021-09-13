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
export class PedidosPendientesEditarPage implements OnInit {


  // Seleccionamos o iniciamos el valor '0' del <select>
  opcionSeleccionado: string  = '0';
  verSeleccion: string        = '';


  
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

  constructor() {  
  }

  capturar() {
    // Pasamos el valor seleccionado a la variable verSeleccion
    this.verSeleccion = this.opcionSeleccionado;
  }
  ngOnInit() {

  }

}
