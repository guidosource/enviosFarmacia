import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-altacliente',
  templateUrl: './altacliente.component.html',
  styleUrls: ['./altacliente.component.css']
})
export class AltaclienteComponent implements OnInit {

  form: FormGroup;

  constructor() { 

    this.form = new FormGroup({
      'nombre' : new FormControl('', [Validators.required]),
      'apellido' : new FormControl('', [Validators.required]),
      'documento' : new FormControl('', [Validators.required]),
      'telefono' : new FormControl('', [Validators.required]),
      'direccion' : new FormControl('', [Validators.required]),
      'email' : new FormControl('', [Validators.required])
    });

  }

  ngOnInit() {
  }

}
