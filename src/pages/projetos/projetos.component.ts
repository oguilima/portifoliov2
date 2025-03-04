import { Component, OnInit } from '@angular/core';
import { CardProjectComponent } from "../../components/card-project/card-project.component";
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';

import { Projeto } from '../../interfaces/projeto';
import { ProjetosService } from '../../services/projetos.service';

@Component({
  selector: 'app-projetos',
  imports: [ CardProjectComponent, CommonModule, CarouselModule],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.css'
})
export class ProjetosComponent implements OnInit {
  constructor(private projetosService: ProjetosService) { }

  ngOnInit(): void {
    this.projetosService.getProjects().subscribe({
      next: (projetos) => this.projetos = projetos,
      error: (err) => console.error('Erro ao buscar projetos', err),
    });
  }

  projetos: Projeto[] = []


}