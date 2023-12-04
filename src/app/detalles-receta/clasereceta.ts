

export class receta{
nombre:string='';
ingredientes:string[]=[];
detalles!:string;
foto!:string;
constructor(nombre:string="",ingredientes:string[]=[],detalles:string="",foto:string=''){
    this.nombre=nombre;
    this.ingredientes=ingredientes;
    this.detalles=detalles;
    this.foto=foto;
}

}