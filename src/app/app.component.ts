import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userName: string = 'Fagner Viana';

  userData = {
    email:'fagnerviana03@gmail.com',
    role: 'admin'
  }

  name: string = 'Fagner';

  title = 'angular-study';
}
