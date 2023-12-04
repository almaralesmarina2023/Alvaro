import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaRecetasComponent } from './lista-recetas/lista-recetas.component';
import { RecetasComponent } from './recetas/recetas.component';
import { DetallesRecetaComponent } from './detalles-receta/detalles-receta.component';
import { FormsModule } from '@angular/forms';
import { AppRecetaslinksModule } from './app-recetaslinks.module';
import { DataserviceService } from './dataservice.service';

@NgModule({
  declarations: [
    AppComponent,
    ListaRecetasComponent,
    RecetasComponent,
    DetallesRecetaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRecetaslinksModule
  ],
  providers: [DataserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
