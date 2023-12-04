import { Injectable } from '@angular/core';
import { receta } from './detalles-receta/clasereceta';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  receta1=new receta("Croquetas criollas",["Pollo","Arina","Huevo"],"Aqui estaran los detalles de la receta ","./assets/croquetas-pollo-e1496454664839.jpg")
  receta2=new receta("Mariquitas de Plátanos",['Platanos','Agua','Aceite'],"Aqui estaran los detalles de la receta","./assets/th.jpg")
  receta3=new receta("Hamburguesa",["Pan","Ensaladas","Queso","Hamburguesa"],"","./assets/Hamburguesa.jpg")
  receta4=new receta("Tacos mexicanos",["Arina","Tomates","Carne de cerdo"],"","./assets/tacos.jpg")
  recetas:receta[]=[this.receta1,this.receta2,this.receta3,this.receta4]

  constructor() { }
  encontrarreceta(index:number){
    return this.recetas[index]
  }
}
