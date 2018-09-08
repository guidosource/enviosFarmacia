import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pendientes',
  templateUrl: './pendientes.component.html',
  styleUrls: ['./pendientes.component.css']
})
export class PendientesComponent implements OnInit {


  enviosPendientes: any[] = [

    {
      cliente : { nombre: 'juan', apellido: 'lopez', direccion: 'las heras', telefono: '123231' },
      repartidor : 'Pablo',
      estado :  'Pendiente',
      fecha : Date.now()
    },
    {
      cliente : { nombre: 'maria', apellido: 'garcia', direccion: 'c diaz', telefono: '321321' },
      repartidor : 'Pablo',
      estado :  'Pendiente',
      fecha : Date.now()
    },
    {
      cliente : { nombre: 'sol', apellido: 'perez', direccion: 'juncal', telefono: '765876' },
      repartidor : 'Manu',
      estado :  'Pendiente',
      fecha : Date.now()
    },
    {
      cliente : { nombre: 'raul', apellido: 'gonzalez', direccion: 'austria', telefono: '3214325' },
      repartidor : 'Manu',
      estado :  'Pendiente',
      fecha : Date.now()
    }

  ];

  constructor() { }

  guardarEstado() {

  }

  

  ngOnInit() {
  }


}
