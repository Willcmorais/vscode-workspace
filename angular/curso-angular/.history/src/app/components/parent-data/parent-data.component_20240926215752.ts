import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrl: './parent-data.component.css',
})
export class ParentDataComponent {
  //dizemos que o nome é uma string vazia, não podemos fazer o input sem valor. Estamos recebendo
  //o nome do componente
  @Input() name: String = '';
  //a exclamação garante que o dado está será iniciado em algum momento
  @Input() userData!: { email: String; role: String; bday: n };

  constructor() {}

  ngOnInit(): void {}
}
