import { Component, OnInit } from '@angular/core';
import { CardProjectComponent } from "../../components/card-project/card-project.component";
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';

import { Projeto } from '../../interfaces/projeto';
import { ProjetosService } from '../../services/projetos.service';

import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-projetos',
  imports: [ CardProjectComponent, CommonModule, CarouselModule, ProgressSpinnerModule],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.css'
})
export class ProjetosComponent implements OnInit {
  projetos: Projeto[] = []
  loading: boolean = false
  constructor(private projetosService: ProjetosService) { }

  ngOnInit(): void {
    this.loading = true;
    
    this.projetosService.getProjects().subscribe({
      next: (projetos) => {this.projetos = projetos; this.loading = false},
      error: (err) => {console.error('Erro ao buscar projetos', err); this.loading = false},
    });
  }



}