import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrl: './parent-data.component.css',
})
export class ParentDataComponent {
  //dizemos que o nome é 
  @Input() name: String = '';

  constructor() {}

  ngOnInit(): void {}
}
