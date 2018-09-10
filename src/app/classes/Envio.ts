import { Pedido } from './Pedido';


export class Envio {
    
    idCliente: string;
    idEmpleado: string;
    fechaInicio: Date;
    pedido: Pedido;
    idRepartidor: string;
    estadoEnvio: string;
    comentarios: string;

    fechaDespacho: Date;
    fechaFin: Date;
    
    
    constructor() {
    }
}