import { Component, Input } from '@angular/core';
import { receta } from './clasereceta';
import { ActivatedRoute, Router ,RouterModule} from '@angular/router';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-detalles-receta',
  templateUrl: './detalles-receta.component.html',
  styleUrls: ['./detalles-receta.component.css']
})
export class DetallesRecetaComponent {
  @Input() recetah!:receta;
  @Input() i:number=0;
  constructor(private router:Router,private route:ActivatedRoute ,private midata:DataserviceService){}
  indice:number=0;
  recetapulsada:receta=new receta();

  ngOnInit(){
    
    this.indice=this.route.snapshot.params['id'];
    this.recetapulsada=this.midata.encontrarreceta(this.indice)
  }
}
