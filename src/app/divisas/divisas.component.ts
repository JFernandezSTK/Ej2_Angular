import { Component } from '@angular/core';

@Component({
  selector: 'app-divisas',
  templateUrl: './divisas.component.html',
  styleUrls: ['./divisas.component.css']
})
export class DivisasComponent {
  euro:number=0
  divisa:string=""
  currency:number=0

  constructor(){}

  ngOnInit():void{}

  calcDivisas(){
    switch(this.divisa){
      case "Libra":
        this.currency=this.euro * 0.88
        break

      case "Yen":
        this.currency=this.euro * 146,64
        break

      case "Dolar":
        this.currency=this.euro * 1.10
        break
      
      case "Euro":
        this.currency=this.euro
        break

      case "Peso Mejicano":
        this.currency=this.euro * 19.95
        break
      
      default:
        alert("Moneda no registrada")
        break
    }
  }

}
