import { Component } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.css']
})
export class QuienesSomosComponent {
  constructor(private route:Router){

  }
  volver(){
    this.route.navigate([''])
  }
}
