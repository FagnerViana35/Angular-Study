import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emiter2',
  templateUrl: './emiter2.component.html',
  styleUrls: ['./emiter2.component.css']
})
export class Emiter2Component implements OnInit {

  number2: number = 2;

  constructor() { }

  ngOnInit(): void {
  }

  onChangeNumber2() {
    this.number2 = Math.floor(Math.random() * 100)
  }

}
