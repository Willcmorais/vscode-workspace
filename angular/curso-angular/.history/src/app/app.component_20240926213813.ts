import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  //compartilhar esse dado pai para o componente filho
  userName = 'William';
//com
  userData={
    email: 'willcmorais@gmail.com',
    role: 'Admin',
  }

  title = 'curso-angular';
}
