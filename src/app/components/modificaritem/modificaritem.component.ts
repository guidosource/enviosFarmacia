import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../classes/Item';

@Component({
  selector: 'app-modificaritem',
  templateUrl: './modificaritem.component.html',
  styleUrls: ['./modificaritem.component.css']
})
export class ModificaritemComponent implements OnInit {


  @Input() item: Item;

  constructor() { }

  ngOnInit() {
  }

}
