import { Component } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { receta } from '../detalles-receta/clasereceta';

@Component({
  selector: 'app-lista-recetas',
  templateUrl: './lista-recetas.component.html',
  styleUrls: ['./lista-recetas.component.css']
})
export class ListaRecetasComponent {
  constructor(private midataservice:DataserviceService){
    this.recetas=this.midataservice.recetas;
  }
// receta1:string="Croquetas de Pollo";
// receta2:string="Mariquitas"
// recetas:string[]=[this.receta1,this.receta2]
recetas:receta[]=[];

agregarRecetas(){
}
}
