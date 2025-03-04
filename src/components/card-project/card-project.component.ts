import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { Projeto } from '../../interfaces/projeto';

@Component({
  selector: 'app-card-project',
  imports: [CardModule, ButtonModule, CommonModule],
  templateUrl: './card-project.component.html',
  styleUrl: './card-project.component.css'
})
export class CardProjectComponent {
  @Input() projeto: Projeto = {
    imagemUrl: "",
    title: "",
    cliente: "",
    description: "",
    github: "",
    techs: []
  }

  constructor() { }

  redir(link: string){
    const url = link.startsWith('http') ? link : `https://${link}`;
    window.open(url, '_blank');
  }
}
