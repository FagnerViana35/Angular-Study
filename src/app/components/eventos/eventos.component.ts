import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  constructor() { }

  contador: number = 0;

  show: boolean = false;

  ngOnInit(): void {
  }

  testantoClicksD(): void {
    this.contador = this.contador + 1;
    console.log(this.contador);
  }

  testantoClicksI(): void {
    this.contador = this.contador - 1;
    console.log(this.contador);
  }


  testantoClicksClear(): void {
    this.contador = 0;
    console.log(this.contador);
  }

  testanto(): void {
    this.show = !this.show;
  }

}
