import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmacion-nuevo-proveedor',
  templateUrl: './confirmacion-nuevo-proveedor.page.html',
  styleUrls: ['./confirmacion-nuevo-proveedor.page.scss'],
})
export class ConfirmacionNuevoProveedorPage implements OnInit {

  constructor() { 
  }

  ngOnInit() {
  }

  funcionEnsayo(){
    console.log("Hola");
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxtlloRtMNbNtRGxu1qaEvOJsYSaWybdUSmK3bCApGYMkvC1zey2FNRPTxD0qO5REsYfQ/exec'
    const form = document.forms['form01']
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
    })
  }

}
