import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import { CommonModule } from '@angular/common';
import { FieldsetModule } from 'primeng/fieldset';

import { Formacao } from '../../interfaces/formacao';


@Component({
  selector: 'app-formacao',
  imports: [ButtonModule, StepperModule, CommonModule,
    FieldsetModule],
  templateUrl: './formacao.component.html',
  styleUrl: './formacao.component.css'
})
export class FormacaoComponent {
formacoes: Formacao[] = [
    {
      nome: "Universidade São Judas Tadeu",
      tipo: "Bacharelado",
      descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      dataInicio: "10/10/2010",
      dataFim: "-"
    }
  ]
}
