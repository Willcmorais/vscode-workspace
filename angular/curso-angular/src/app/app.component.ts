import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  //compartilhar esse dado pai para o componente filho
  userName = 'William';

  //compartilhar um objeto com o componente parent-data filho
  userData = {
    email: 'willcmorais@gmail.com',
    role: 'Admin',
    bday: '1996/11/08',
  };

  title = 'curso-angular';
}
