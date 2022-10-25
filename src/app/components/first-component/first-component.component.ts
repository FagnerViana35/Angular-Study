import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  name: String = 'Fagner';
  age: Number = 34;
  carreiras: String[] = [
    'desenvolvedor',
    'operador',
    'piscineiro',
    'market',
    'tratorista'
  ]
  users = [
    {id: 1, name: 'Gabriel'},
    {id: 2, name: 'Pedro'},
    {id: 3, name: 'Julia'},
    {id: 4, name: 'Julio'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
