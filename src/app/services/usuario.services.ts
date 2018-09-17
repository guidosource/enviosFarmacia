import { Injectable } from '@angular/core';

@Injectable()
export class UsuarioServices {
   
// TEST
obrasSociales: string[] = [];

 constructor() {

    // TEST
    this.obrasSociales = ['osde', 'swiss medical', 'galeno', 'omint'];

  }

}