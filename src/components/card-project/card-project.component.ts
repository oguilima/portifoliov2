import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

import { Projeto } from '../../interfaces/projeto';

@Component({
  selector: 'app-card-project',
  imports: [CardModule, ButtonModule],
  templateUrl: './card-project.component.html',
  styleUrl: './card-project.component.css'
})
export class CardProjectComponent {
  constructor(){}

  @Input() projeto: Projeto = {
    imagemUrl: "",
    title: "",
    cliente: "",
    description: "",
    tecnologias: []
  }
}
