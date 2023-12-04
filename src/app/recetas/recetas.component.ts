import { Component, EventEmitter, Input, Output } from '@angular/core';
import { receta } from '../detalles-receta/clasereceta';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent {
@Input() recetah!:receta;
@Input() i!:number;
}
