import { Item } from './Item';

export class Pedido { 

    items: Item[];
    importe: number;

    constructor() {

        this.items = new Array();
    }

}