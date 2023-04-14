import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  correo:string=""
  direccion:string=""
  telefono:string=""
  comunidad:string=""
  pago:string=""
  info:boolean=false
  texto:string=""


  constructor(){}

  ngOnInit():void{}

  Muestrainfo(){
    this.texto=this.correo+","+this.direccion+","+this.telefono+","+this.comunidad+","+this.pago+","+(this.info?"Aceptado":"No aceptado")
  }

}

