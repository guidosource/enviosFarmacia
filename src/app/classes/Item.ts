
export class Item {
    
}

export  class Particular extends Item {

    nombre: string;
    importe: number;
    cantidad: number;

    constructor(nombre: string, importe: number, cantidad: number) {
        super();
        this.nombre = nombre;
        this.importe = importe;
        this.cantidad = cantidad;
    }

}

export  class ObraSocial extends Item {
    
    obraSocial: string;
    fecha: Date;
    matricula: string;
    adicional: string;
    items: Particular[];
    importe: number;


    constructor( obraSocial: string, fecha: Date, matricula: string , items: Particular[] , adicional: string = '' ){
        super();
        this.obraSocial = obraSocial;
        this.fecha = fecha;
        this.matricula = matricula;
        this.items = items;
        this.adicional = adicional;
        this.importe = this.importeTotal();

    }

    private importeTotal(): number { 

        let sumaImportes = 0;
        let importeFinal: string;

        for (const i of this.items) {
            sumaImportes = sumaImportes + i.importe;
        }

        importeFinal = sumaImportes.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0];

        return parseFloat(importeFinal);

    }
}

