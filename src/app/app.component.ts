import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Projeto de Aula';

  categorias = [
    {id: '1', nome: 'Informática' },
    {id: '2', nome: 'Laboratório' },
    {id: '3', nome: 'Vendas' },
    {id: '4', nome: 'Secretária' },
  ]
}
