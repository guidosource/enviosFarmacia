import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Particular, ObraSocial } from '../../classes/Item';
import { MessageService } from 'primeng/api';
import { UsuarioServices } from '../../services/usuario.services';



@Component({
  selector: 'app-agregaritem',
  templateUrl: './agregaritem.component.html',
  styleUrls: ['./agregaritem.component.css']
})
export class AgregaritemComponent implements OnInit {

  @Output() respuesta: EventEmitter<any>;

  // Obras Sociales
  obrasSociales: string[];

  // Tipo de carga (PARTICULA U OBRA SOCIAL)
  tipo: string;
  
  // Controles Formulario
  formParticular: FormGroup;
  formObraSocial: FormGroup;

  // Carga Items Receta
  itemsReceta: Particular[] = [];

  constructor(private _messageService: MessageService, private _usuarioServices: UsuarioServices) {
      
      this.obrasSociales = this._usuarioServices.obrasSociales;
    
      this.respuesta = new EventEmitter();

      this.formParticular = new FormGroup({
        'nombre': new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(61)]),
        'gramaje': new FormControl('', [Validators.minLength(1), Validators.maxLength(61)]),
        'cantidad': new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(61)]),
        'importe': new FormControl('', [Validators.required, Validators.pattern('^[0-9]+([.][0-9]+)?$'), 
        Validators.minLength(1), Validators.maxLength(61)])

      });

      this.formObraSocial = new FormGroup({
        'osocial': new FormControl('', [Validators.required]),
        'fecha' : new FormControl('', [Validators.required]),
        'matricula': new FormControl('', [Validators.required]),
        'adicional': new FormControl('', [Validators.maxLength(61)])
      });

   }

  ngOnInit() {
  }

  agregarItem(tipo: string) {

     let item = new Particular(this.formParticular.value.item, this.formParticular.value.importe);

     if (tipo === 'particular') {
       
       this.respuesta.emit(item);
     } else {
        this.itemsReceta.push(item);
        this.formParticular.get('item').setValue('');
        this.formParticular.get('importe').setValue('');
        this.showSuccess();
     }

  }

  borrarItem(index: number) {

    this._messageService.add({key: 'custom', severity: 'error', summary: 'Item eliminado',
     detail: `Se elimino: ${this.itemsReceta[index].nombre}`});
    
    this.itemsReceta.splice(index, 1);


  }

  agregarReceta() {

    const datos = this.formObraSocial.value;

    const receta = new ObraSocial(datos.osocial, datos.fecha, datos.matricula, this.itemsReceta, datos.adicional);

    this.respuesta.emit(receta);

  }

  showSuccess() {

    let ultItem = this.itemsReceta[this.itemsReceta.length - 1];

    this._messageService.add({key: 'tc', severity: 'success', summary: 'Item agregado', detail: `Se agrego: ${ultItem.nombre}`});
}

  test() {
    console.log(this.tipo);
  }

}
