import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorias-pesquisa',
  templateUrl: './categorias-pesquisa.component.html',
  styleUrls: ['./categorias-pesquisa.component.less']
})
export class CategoriasPesquisaComponent implements OnInit {

  categorias = [
    {id: '1', nome: 'Informática' },
    {id: '2', nome: 'Laboratório' },
    {id: '3', nome: 'Vendas' },
    {id: '4', nome: 'Secretária' },
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
