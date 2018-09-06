
export class Cliente {

    nombre: string;
    apellido: string;
    documento: number;
    telefono: string;
    direccion: string;
    email: string;

    constructor(nombre: string, apellido: string, documento: number,
    telefono: string, direccion: string, email: string) {

        this.nombre = nombre;
        this.apellido = apellido;
        this.documento = documento;
        this.telefono = telefono;
        this.direccion = direccion;
        this.email = email;
    }

}