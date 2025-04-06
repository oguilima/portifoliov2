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
      descricao: "Cursei Ciência da Computação na Universidade São Judas Tadeu, onde tive uma base sólida em desenvolvimento de software, algoritmos, inteligência artificial e segurança da informação. O curso foi bem completo e focado no que o mercado realmente exige, com bastante prática e contato com tecnologia atual. Foi onde desenvolvi meu raciocínio lógico, aprendi a resolver problemas complexos e comecei a trabalhar em projetos que me prepararam de verdade para a área.",
      dataInicio: "07/2019",
      dataFim: "12/2024",
      img: "/assets/images/usjt.png"
    },{
      nome: "Node.js Microservices: NestJS, RabbitMQ and Cloud Services",
      tipo: "Udemy",
      descricao: "Fiz o curso Node.js Microservices: NestJS, RabbitMQ and Cloud Services, onde aprofundei meus conhecimentos em microsserviços usando NestJS. Aprendi a estruturar aplicações escaláveis com comunicação assíncrona via RabbitMQ, além de integrar serviços com soluções em nuvem. O curso foi muito prático e me ajudou a entender na prática como separar responsabilidades entre serviços, lidar com mensageria e preparar aplicações para ambientes distribuídos.",
      dataInicio: "-",
      dataFim: "04/2025",
      img: "/assets/images/nest.jpg"
    },{
      nome: "NLW - Java",
      tipo: "RocketSeat",
      descricao: "Participei de um projeto prático promovido pela Rocketseat, onde desenvolvi uma aplicação back-end em Java com Spring Boot. Usei ferramentas modernas como H2 Database, JPA, Flyway para migrations, além de Lombok e records para otimizar o código e a transferência de dados. Foi uma ótima oportunidade para reforçar boas práticas e trabalhar com tecnologias focadas em eficiência e escalabilidade.",
      dataInicio: "-",
      dataFim: "07/2024",
      img: "/assets/images/nwl-java.jpg"
    },{
      nome: "Node.js do Zero a Maestria",
      tipo: "Udemy",
      descricao: "Concluí o curso Node.js do Zero à Maestria, onde aprendi desde os fundamentos até conceitos avançados da plataforma. Trabalhei com criação de APIs, integração com bancos de dados, autenticação, uploads, WebSockets e outros recursos essenciais para aplicações modernas com Node.js. Foi uma formação completa que reforçou minha base e ampliou minha visão sobre desenvolvimento back-end com JavaScript.",
      dataInicio: "-",
      dataFim: "06/2023",
      img: "/assets/images/node.jpg"
    }
  ].reverse()
}
