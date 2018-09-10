
export class Item {
    
}

export  class Particular extends Item {

    nombre: string;
    importe: number;

    constructor(nombre: string, importe: number) {
        super();
        this.nombre = nombre;
        this.importe = importe;
    }

}

export  class ObraSocial extends Item {
    
    obraSocial: string;
    fecha: Date;
    matricula: string;
    adicional: string;
    items: Particular[];


    constructor( obraSocial: string, fecha: Date, matricula: string , items: Particular[] , adicional: string = '' ){
        super();
        this.obraSocial = obraSocial;
        this.fecha = fecha;
        this.matricula = matricula;
        this.items = items;
        this.adicional = adicional;
    }
}

