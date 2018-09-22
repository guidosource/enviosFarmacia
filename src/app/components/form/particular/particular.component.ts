import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Particular } from '../../../classes/Item';

@Component({
  selector: 'app-particular',
  templateUrl: './particular.component.html',
  styleUrls: ['./particular.component.css']
})
export class ParticularComponent implements OnInit {

  form: FormGroup;

  @Output() respuesta: EventEmitter<any>;
  @Input() item: Particular;

  // Modificar
  modificar: boolean;

  constructor() {

    this.respuesta = new EventEmitter();

    this.form = new FormGroup({
      'nombre': new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(61)]),
      'gramaje': new FormControl('', [Validators.minLength(1), Validators.maxLength(61)]),
      'cantidad': new FormControl('', [Validators.minLength(1), Validators.maxLength(61)]),
      'importe': new FormControl('', [Validators.required, Validators.pattern('^[0-9]+([.][0-9]+)?$'),
      Validators.minLength(1), Validators.maxLength(61)]),
      'multiplicador': new FormControl('1', [Validators.required, Validators.minLength(1), Validators.maxLength(99)])

    });
    
  }

  agregarItem() {

    let itemNombre = `${this.form.value.nombre} ${this.form.value.gramaje}`;
    const itemImporte = this.form.value.importe * this.form.value.multiplicador;
    const importeFinal = itemImporte.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0];

    if (this.form.value.cantidad) {
      itemNombre = itemNombre + ` x ${this.form.value.cantidad}`;
    }

    const item = new Particular(itemNombre.trim(), parseFloat(importeFinal), this.form.value.multiplicador);
    
    this.respuesta.emit(item);
    
  }

  ngOnInit() {

    if (this.item) {
      this.form.get('nombre').setValue(this.item.nombre);
      this.form.get('importe').setValue(this.item.importe);
      this.form.get('gramaje').setValue('');
      this.form.get('cantidad').setValue('');
      this.form.get('multiplicador').setValue(this.item.cantidad);

      this.modificar = true;

    }

  }

}
