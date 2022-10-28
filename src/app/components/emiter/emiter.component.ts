import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emiter',
  templateUrl: './emiter.component.html',
  styleUrls: ['./emiter.component.css']
})
export class EmiterComponent implements OnInit {
  
  myNumber: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  onChangeNumber1(){
    this.myNumber = Math.floor(Math.random() * 100)
  }

}
