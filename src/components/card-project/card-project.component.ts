import { Component, Input, OnInit } from '@angular/core';
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
export class CardProjectComponent implements OnInit {
  @Input() projeto: Projeto = {
    imagemUrl: "",
    title: "",
    cliente: "",
    description: "",
    github: "",
    techs: ""
  }

  techsParsed: any[] = [];

  constructor() { }

  ngOnInit() {
    if (this.projeto.techs && Array.isArray(this.projeto.techs)) {
      try {
        this.techsParsed = this.projeto.techs.map((t: string) => JSON.parse(t));
      } catch (e) {
        console.error("Erro ao parsear techs:", e);
      }
    }
  }

  redir(link: string){
    const url = link.startsWith('http') ? link : `https://${link}`;
    window.open(url, '_blank');
  }
}
