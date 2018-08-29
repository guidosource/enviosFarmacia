import { Component, OnInit } from '@angular/core';
import { ClienteServices } from '../../services/cliente.services';
import { MatTableDataSource, MatPaginator } from '@angular/material';



@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  clientes: any[] = [];
  
  agenda: any[] = [];
  
  loading: boolean;

  dataSource;

  displayedColumns: string[] = ['nombre', 'apellido', 'documento', 'telefono', 'direccion', 'email'];

  constructor(private _clienteServices: ClienteServices) {

    this.loading = true;

    this._clienteServices.todosLosClientes()
    .subscribe( data => {
      this.clientes = data;

      this.armarAgenda(this.clientes);
      
      this.loading = false;
    });
    
   }

  ngOnInit() {
  }

  armarAgenda( data: any[]  ) {
    this.agenda = data;
  }

  buscarClientes(termino: string) {
    
    this.loading = true;

    if (termino === '') {
      this.armarAgenda(this.clientes);
      this.loading = false;
      return;
    }

    this._clienteServices.buscarClientes(termino)
      .subscribe(res => {
        this.armarAgenda(res);
        this.loading = false;
      });
  }
}
