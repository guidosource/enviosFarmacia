import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-altacliente',
  templateUrl: './altacliente.component.html',
  styleUrls: ['./altacliente.component.css']
})
export class AltaclienteComponent implements OnInit {

  form: FormGroup;

  @Output() respuesta: EventEmitter<any>;

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
  }

  altaCliente() {
    console.log(this.form.value);

    let rta = {
      ok : false,
      err : 'Ya existe el documento'
    };

    this.respuesta.emit(rta);
    //this.respuesta.emit(true);
  }

}
