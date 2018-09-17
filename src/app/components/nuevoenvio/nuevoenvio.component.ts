
import { Item, Particular, ObraSocial } from './../../classes/Item';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Message } from 'primeng/components/common/api';

import { ClienteServices } from '../../services/cliente.services';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-nuevoenvio',
  templateUrl: './nuevoenvio.component.html',
  styleUrls: ['./nuevoenvio.component.css']
})
export class NuevoenvioComponent implements OnInit {

  tablaItems: Item[] = new Array();

  msgs: Message[] = [];

  // TEST
  clientes: any = [];


  // loadings busqueda
  loading: boolean;

  // busqueda cliente
  clienteEncontrado: any;

  clienteSeleccionado: any;

  // MODAL
  agregarItemsModal: BsModalRef;

  constructor(private _clienteServices: ClienteServices, private _modalService: BsModalService) {

    let fecha = new Date();
    let item1 = new Particular('rivotril 0.5 x 60', 208.50);
    let item2 = new ObraSocial('Osde', fecha, '544413', []);

    this.tablaItems.push(item1, item2);

    // 

    this.clientes = this._clienteServices.todosLosClientes();
  }

  agregarItem( item: Item ) {

    this.tablaItems.push(item);

    this.agregarItemsModal.hide();

  }

  eliminarItem( index: number ) { 

    this.tablaItems.splice(index, 1);

  }


  buscarCliente(termino: string) {

    this.clienteEncontrado = null;

    this.loading = true;

    this.limpiarMensaje();

    let term = termino.trim().toLowerCase();

    let resultado = this.clientes.filter(cliente => term == cliente.nombre);


    setTimeout(() => {


      this.loading = false;



      if (resultado.length === 0) {

        this.msgs.push({ severity: 'error', summary: 'Cliente no encontrado', detail: '' });

      } else {
        this.clienteEncontrado = resultado[0];
      }



    }, 3000);




  }

  seleccionarCliente() {

    this.clienteSeleccionado = this.clienteEncontrado;

  }

  openModal(template: TemplateRef<any>) {

    this.agregarItemsModal = this._modalService.show(template, { ignoreBackdropClick: true });
  }



  limpiarMensaje() {
    this.msgs = [];
  }

  ngOnInit() {
  }

}
