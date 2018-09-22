import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UsuarioServices } from '../../../services/usuario.services';
import { Particular, ObraSocial } from '../../../classes/Item';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-obrasocial',
  templateUrl: './obrasocial.component.html',
  styleUrls: ['./obrasocial.component.css']
})
export class ObrasocialComponent implements OnInit {

  @Output() respuesta: EventEmitter<any>;

  // Obras Sociales
  obrasSociales: string[];

  // Carga Items Receta
  itemsReceta: Particular[] = [];

  form: FormGroup;

  // Modal agregarItems
  crearAgregarItems: boolean;

  constructor(private _usuarioServices: UsuarioServices, private _messageService: MessageService) {

    this.respuesta = new EventEmitter();

    this.form = new FormGroup({
      'osocial': new FormControl('', [Validators.required]),
      'fecha': new FormControl('', [Validators.required]),
      'matricula': new FormControl('', [Validators.required]),
      'adicional': new FormControl('', [Validators.maxLength(61)])
    });

  }

  agregarItem(item: Particular) {

    this.itemsReceta.push(item);

    this.showSuccess();


  }

  borrarItem(index: number) {

    this._messageService.add({
      key: 'custom', severity: 'error', summary: 'Item eliminado',
      detail: `Se elimino: ${this.itemsReceta[index].nombre}`
    });

    this.itemsReceta.splice(index, 1);
  }

  showSuccess() {

    const ultItem = this.itemsReceta[this.itemsReceta.length - 1];

    this._messageService.add({
      key: 'tc', severity: 'success', summary: 'Item agregado',
      detail: `Se agrego: ${ultItem.nombre} Cantidad: ${ultItem.cantidad}`
    });
  }

  agregarReceta() {

    const datos = this.form.value;

    const receta = new ObraSocial(datos.osocial, datos.fecha, datos.matricula, this.itemsReceta, datos.adicional);

    this.respuesta.emit(receta);

  }

  abrirModal() {
    this.crearAgregarItems = true;
  }

  cerrarModal() {
    this.crearAgregarItems = false;
  }

  ngOnInit() {
  }

}
