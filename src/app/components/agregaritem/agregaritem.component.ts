import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Particular, ObraSocial } from '../../classes/Item';


@Component({
  selector: 'app-agregaritem',
  templateUrl: './agregaritem.component.html',
  styleUrls: ['./agregaritem.component.css']
})
export class AgregaritemComponent implements OnInit {

  @Output() respuesta: EventEmitter<any>;

  tipo: string;
  
  // Controles Formulario
  item: string;
  importe: number;

  constructor() {
      this.respuesta = new EventEmitter();
   }

  ngOnInit() {
  }

  agregarItem() {

     let item = new Particular(this.item, this.importe);

     this.respuesta.emit(item);

  }

  test() {
    console.log(this.tipo);
  }

}
