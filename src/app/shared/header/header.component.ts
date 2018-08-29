import { Component, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  userName: String = '';

  @ViewChild('altaCliente') altaCliente: ModalDirective;
  altaClienteShow = false; // Bandera ;crea en el dom el modal
  errorAltaCliente = false; // Bandera ;muestra si ocurrio un error
  msjError: String; // Es el mensaje indicando el error.

  @ViewChild('agenda') agenda: ModalDirective;
  agendaShow = false; // Bandera ;crea en el dom el modal

  constructor() {

      // prueba
      this.userName = 'San Agustin';

   }

  showAltaCliente() {
    this.altaClienteShow = true;
  }

  hideAltaCliente(res: any) {
    
    if (res.ok === 'true') {
      this.altaCliente.hide();
    } else {
      this.msjError = res.err;
      this.errorAltaCliente = true;
    }

  }

  onHiddenAltaCliente() {
    this.altaClienteShow = false;
    this.errorAltaCliente = false;
  }

  showAgenda() {
    this.agendaShow = true;
  }

  hideAgenda() {
    
    this.agenda.hide();
    
  }

  onHiddenAgenda() {
    this.agendaShow = false;
  }


  
}
