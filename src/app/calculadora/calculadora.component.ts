import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  num1:number=0
  num2:number=0
  resultado:number=0

  constructor(){}

  ngOnInit():void{}

  suma(){
    this.resultado=this.num1 + this.num2
  }

  resta(){
    this.resultado=this.num1 - this.num2
  }

  mult(){
    this.resultado=this.num1 * this.num2
  }

  division(){
    this.resultado=this.num1 / this.num2
  }
}
