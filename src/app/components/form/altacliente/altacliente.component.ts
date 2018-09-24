import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Cliente } from '../../../classes/Cliente';


@Component({
  selector: 'app-altacliente',
  templateUrl: './altacliente.component.html',
  styleUrls: ['./altacliente.component.css']
})
export class AltaclienteComponent implements OnInit {

  form: FormGroup;

  @Output() respuesta: EventEmitter<any>;
  @Input() cliente: Cliente;
  @Input() operacion: string;

  constructor() { 

    this.form = new FormGroup({
      'nombre' : new FormControl('', [Validators.required, Validators.pattern('^[a-zA-ZÑñáéíóúÁÉÍÓÚäëïöüÄËÏÖÜàèìòùÀÈÌÒÙ \s]{1,50}$')]),
      'apellido' : new FormControl('', [Validators.required, Validators.pattern('^[a-zA-ZÑñáéíóúÁÉÍÓÚäëïöüÄËÏÖÜàèìòùÀÈÌÒÙ \s]{1,50}$')]),
      'documento' : new FormControl('', [Validators.pattern('^[0-9]{1,31}$')]),
      'telefono' : new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(31)]),
      'direccion' : new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(51)]),
      'email' : new FormControl('', [Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')])
    });

    
    this.respuesta = new EventEmitter();
    
    
  }
  
  ngOnInit() {
    
    if (this.cliente) {
     
      this.form.get('nombre').setValue(this.cliente.nombre);
      this.form.get('apellido').setValue(this.cliente.apellido);
      this.form.get('documento').setValue(this.cliente.documento);
      this.form.get('telefono').setValue(this.cliente.telefono);
      this.form.get('direccion').setValue(this.cliente.direccion);
      this.form.get('email').setValue(this.cliente.email);

    }
  
  }

  altaCliente() {
    
    let body = this.form.value;
    
    let nuevoCliente: Cliente = new Cliente(body.nombre, body.apellido, body.documento, body.telefono, body.direccion, body.email);
    
    this.respuesta.emit(nuevoCliente);
    //this.respuesta.emit(true);
  }

}
