import { Component, OnInit } from '@angular/core';
import { ClienteServices } from '../../services/cliente.services';


@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  clientes: any[] = [];
  
  agenda: any[] = [];

  search = '';

  constructor(private _clienteServices: ClienteServices) {

    this._clienteServices.todosLosClientes()
    .subscribe( data => {
      this.clientes = data;

      this.armarAgenda(this.clientes);

    });
    
   }


  ngOnInit() {
    
  }

  armarAgenda( clientes: any[]  ) {
    this.agenda = clientes;
  }

  searchClientes() {
    let busqueda = this.clientes;
    busqueda.filter()
  }
}
