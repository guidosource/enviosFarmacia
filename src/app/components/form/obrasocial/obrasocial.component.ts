import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter, ViewChild, Input } from '@angular/core';
import { UsuarioServices } from '../../../services/usuario.services';
import { Particular, ObraSocial } from '../../../classes/Item';
import { MessageService } from 'primeng/api';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-obrasocial',
  templateUrl: './obrasocial.component.html',
  styleUrls: ['./obrasocial.component.css']
})
export class ObrasocialComponent implements OnInit {

  @Input() receta: ObraSocial;
  @Output() respuesta: EventEmitter<any>;
  @ViewChild('agregarModal') agregarModal: ModalDirective;

  // Modidficar
  modificar: boolean;

  // Obras Sociales
  obrasSociales;

  // Carga Items Receta
  itemsReceta: Particular[] = [];

  form: FormGroup;

  // Modal agregarItems
  crearAgregarItems: boolean;

  fechaHoy;
  fechaLimite;
  
  constructor(private _usuarioServices: UsuarioServices, private _messageService: MessageService) {
    
    this.definirFechas();

    // console.log(this.fechaHoy.toLocaleDateString('es-ARG', {year: 'numeric', day: '2-digit', month: '2-digit'}));

    this.obrasSociales = this._usuarioServices.obrasSociales;

    this.respuesta = new EventEmitter();

    this.form = new FormGroup({
      'osocial': new FormControl('', [Validators.required]),
      'fecha': new FormControl(this.fechaHoy, [Validators.required]),
      'matricula': new FormControl('', [Validators.required]),
      'adicional': new FormControl('', [Validators.maxLength(61)])
    });
    
  }

  private definirFechas() {
     const fecha = new Date();
     const fechaLimite = new Date();
     fechaLimite.setDate(fechaLimite.getDate() - 31);
     this.fechaHoy = fecha.toLocaleDateString('es-ARG', {year: 'numeric', day: '2-digit', month: '2-digit'});
     this.fechaLimite = fechaLimite.toLocaleDateString('es-ARG', {year: 'numeric', day: '2-digit', month: '2-digit'});
  }

  agregarItem(item: Particular) {

    this.itemsReceta.push(item);

    this.agregarModal.hide();

    this.showSuccess();

  }

  borrarItem(index: number) {

    this._messageService.add({
      key: 'tc', severity: 'error', summary: 'Item eliminado',
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

    if ( this.receta ) {
      this.form.get('osocial').setValue(this.receta.obraSocial);
      this.form.get('fecha').setValue(this.receta.fecha);
      this.form.get('matricula').setValue(this.receta.matricula);
      this.form.get('adicional').setValue(this.receta.adicional);
      this.itemsReceta = this.receta.items;

      this.modificar = true;
    }

  }

}
