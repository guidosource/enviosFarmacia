import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Message } from 'primeng/components/common/api';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  userName: String = '';


  // MODAL 
  altaClienteModal: BsModalRef;


  // Mensajes Confirmación - Error
  msgs: Message[] = [];
  

  constructor(private _modalService: BsModalService, ) {

    // prueba
    this.userName = 'San Agustin';
  }

  private mostrarMensaje( severity: string, summary: string, detail: string  ) {
    this.msgs = [];
    this.msgs.push({ severity: severity , summary: summary, detail: detail });
  }

  abrirModal(template: TemplateRef<any>) {


    this.altaClienteModal = this._modalService.show(template, { ignoreBackdropClick: true });

  }

  altaCliente(cliente: any) {

      if (cliente.nombre === 'ok') {
        this.mostrarMensaje('success', 'Ok', 'Cliente dado de alta');
        
          // FALTA CERRAR MODAL

      } else {
        this.mostrarMensaje('error', 'Fallo', 'Documento repetido');
      }
  }

}
