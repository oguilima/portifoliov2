import { Component } from '@angular/core';
import { MenuComponent } from "../../components/menu/menu.component";
import { CardProjectComponent } from "../../components/card-project/card-project.component";
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';

import { Projeto } from '../../interfaces/projeto';

@Component({
  selector: 'app-projetos',
  imports: [MenuComponent, CardProjectComponent, CommonModule, CarouselModule],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.css'
})
export class ProjetosComponent {
  constructor() { }

  projetos: Projeto[] = [
    {
      img: "assets/images/cotacaoEletronica.jpg",
      title: "Portal dos Fornecedores",
      cliente: "Cassi",
      description: "O Portal de Fornecedores tem como objetivo ser uma plataforma que conecta os fornecedores da Cassi com os compradores, onde é possível realizar a cotação e negociação dos processos de compras e contratos, onde é realizado integrações com o ERP Protheus.",
      github: "tst",
      tecnologias: []
    }
  ]


}