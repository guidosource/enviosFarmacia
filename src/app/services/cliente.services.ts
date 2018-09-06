import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { GlobalServices } from '../services/global.services';

@Injectable()
export class ClienteServices {
    
    constructor(private _http: HttpClient, private _global: GlobalServices ) { }

    nuevoCliente() {

        
    }


    todosLosClientes() {
        const options = {
            headers : new HttpHeaders({
                'Content-Type' : 'application/json'
                // 'token' : localStorage.getItem('token')
                
            })
        };
        
        return  this._http.get( this._global.URL_SERVER + '/cliente/obtenerclientes', options )
        .pipe(map(res => res['clientes']) );
    }

    buscarClientes(termino: string) {
        return this._http.get( this._global.URL_SERVER + `/cliente/buscar/${termino}` )
            .pipe(map(res => res['clientes']));
    }
}