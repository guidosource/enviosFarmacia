import { Cliente } from './../../classes/Cliente';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Component, TemplateRef, OnInit, AfterViewInit, ViewChild, AfterContentInit } from '@angular/core';
import { ClienteServices } from '../../services/cliente.services';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Message } from 'primeng/components/common/api';


import { MessageService } from 'primeng/api';





@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit, AfterViewInit, AfterContentInit {

  clientes: any = [];

  // Mensaje confirmación - error
  msgs: Message[] = [];

  loading: boolean;

  // DATA TABLE
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource;
  displayedColumns: string[] = ['cliente', 'telefono', 'direccion', 'email', 'modificar', 'eliminar'];

  // MODAL
  modificarClienteModal: BsModalRef;

  clienteModificar: Cliente;

  constructor(private _clienteServices: ClienteServices, private _modalService: BsModalService,
    private _messageService: MessageService) {
    
    this.loading = true;
    
    this.clientes = this._clienteServices.todosLosClientes();

    this.dataSource = new MatTableDataSource(this.clientes);

    /* this._clienteServices.todosLosClientes()
    .subscribe( data => {
      this.clientes = data;
      
      this.dataSource = new MatTableDataSource(this.clientes);
      
      this.loading = false;
    }); */
    

  }


  showConfirm(cliente: Cliente) {
    this._messageService.clear();
    this._messageService.add({ key: 'c', sticky: true, severity: 'warn',
     summary: `Borrar el registro de ${cliente.nombre}, ${cliente.apellido}`, detail: '¿Está seguro?' });
  }

  onConfirm() {
    this._messageService.clear('c');
  }

  onReject() {
    this._messageService.clear('c');
  }

  clear() {
    this._messageService.clear();
  }

  private mostrarMensaje(severity: string, summary: string, detail: string) {
    this.msgs = [];
    this.msgs.push({ severity: severity, summary: summary, detail: detail });
  }

  modificarCliente(cliente: any) {

    if (cliente.nombre === 'ok') {
      this.mostrarMensaje('success', 'Ok', 'Cliente dado de alta');
    } else {
      this.mostrarMensaje('error', 'Fallo', 'Documento repetido');
    }

  }

  openModal(template: TemplateRef<any>, cliente?: Cliente) {

    if (cliente) {

      this.clienteModificar = cliente;

    }

    this.modificarClienteModal = this._modalService.show(template, { ignoreBackdropClick: true });
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {

  }

  ngAfterContentInit() {

  }


  buscarClientes(termino: string) {

    this.dataSource.filter = termino.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
