import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { RecetasComponent } from './recetas/recetas.component';
import { ContactoComponent } from './contacto/contacto.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ListaRecetasComponent } from './lista-recetas/lista-recetas.component';
import { DetallesRecetaComponent } from './detalles-receta/detalles-receta.component';

const appRoutes:Routes=[
  {path:'',component:ListaRecetasComponent},
  {path:'contacto',component:ContactoComponent},
  {path:'quienes-somos',component:QuienesSomosComponent},
  {path:'detalles/:id',component:DetallesRecetaComponent}
]

@NgModule({
  declarations: [],
  imports: [
RouterModule.forRoot(appRoutes)],
exports: [RouterModule]
})
export class AppRecetaslinksModule { 


}
