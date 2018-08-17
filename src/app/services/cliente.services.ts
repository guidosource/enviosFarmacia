import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map';
import { GlobalServices } from '../services/global.services';

@Injectable()
export class ClienteServices {
    
    constructor(private _http: HttpClient, private _global: GlobalServices ) { }

    todosLosClientes() {
        const options = {
            headers : new HttpHeaders({
                'Content-Type' : 'application/json'
                // 'token' : localStorage.getItem('token')
                
            })
        };
        
        return  this._http.get( this._global.URL_SERVER + '/cliente/obtenerclientes', options )
        .map( (res: any) => {
            return res.clientes;
        });
    }
}