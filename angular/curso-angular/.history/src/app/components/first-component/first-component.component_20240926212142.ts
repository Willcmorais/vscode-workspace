//nesse arquivo é aonde vamos criar as variáveis das nossas classes.
import { Component} from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css',
})
export class FirstComponentComponent {
  /*se não colocar o string o próprio typescript transforma a variável para o parâmetro no momento, esses dados vão estar sendo atualizados
   com o banco de dados automaticamente*/
  name: String = 'William';
  age: number = 27;
  job = 'Programador';
  hobbies = ['Tocar violão', 'Malhar', ' Jogar', ' Estudar', ' Namorar'];
  //objeto carro
  car = {
    name: 'Corolla',
    year: 2022,
  };

  constructor() {}

  ngOnInit(): void {}
}
