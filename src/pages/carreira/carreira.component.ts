import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import { CommonModule } from '@angular/common';
import { FieldsetModule } from 'primeng/fieldset';

import { Trabalho } from '../../interfaces/trabalho';

@Component({
  selector: 'app-carreira',
  imports: [ButtonModule, StepperModule, CommonModule,
    FieldsetModule
  ],
  templateUrl: './carreira.component.html',
  styleUrl: './carreira.component.css'
})
export class CarreiraComponent {
  trabalhos: Trabalho[] = [
   {
      nome: "Hospital América",
      descricao: "No Hospital América, dei início à minha jornada de trabalho como aprendiz de Tecnologia da Informação. Naquela época, conciliava minhas responsabilidades diárias no hospital com as aulas noturnas na faculdade. Essa experiência se revelou extremamente enriquecedora, pois me possibilitou aplicar os conceitos que estava aprendendo nos primeiros semestres diretamente na prática profissional. Fui agraciado com um suporte excepcional por parte da equipe, a qual me proporcionou total liberdade para sanar minhas dúvidas e observar profissionais mais experientes em plena ação. Minha função envolvia o atendimento primário aos usuários, sendo responsável por solucionar questões relativas a problemas de hardware e software mais simples. Essa etapa fundamental me proporcionou uma sólida base para a construção da minha carreira profissional.",
      dataInicio: "06/2019",
      dataFim: "05/2020",
      tecnologiasUtilizadas: [],
      img: 'assets/images/ha.jpeg'
    },{
      nome: "Zaraplast S.a",
      descricao: "Na Zaraplast, ocorreu meu segundo envolvimento com o mercado de trabalho, onde assumi o papel de estagiário de Tecnologia da Informação. No entanto, fui incumbido de muito mais responsabilidades em comparação à minha posição anterior como aprendiz. Além das interações com o suporte, também me foram confiadas tarefas relacionadas à infraestrutura. Essas atribuições adicionais refletiram a confiança depositada em mim e na minha capacidade de lidar com desafios complexos. Apesar de ter vivenciado e aprendido com as experiências ligadas a suporte e infraestrutura, eu sempre soube que minha verdadeira paixão era a programação. Com o apoio dos meus gestores, pude finalmente concretizar esse desejo ao implementar minha primeira página web que não se tratava de um projeto pessoal. Especificamente, desenvolvi a lista de ramais da empresa, que atendia aos mais de 1000 funcionários. Apesar da aparente simplicidade, esse projeto trouxe-me grande satisfação, uma vez que a nova funcionalidade da intranet da empresa foi amplamente aprovada por todos os colaboradores.",
      dataInicio: "07/2020",
      dataFim: "10/2021",
      tecnologiasUtilizadas: [],
      img: 'assets/images/zara.jpeg'
    },{
      nome: "Grupo MFX",
      descricao: "No Grupo MFX, vivenciei a minha terceira incursão no mercado de trabalho, onde atualmente estou empregado. Minha trajetória teve início como desenvolvedor front-end, uma oportunidade que surgiu graças ao reconhecimento do meu trabalho por um prestador de serviços da Zaraplast. Esse reconhecimento abriu as portas para que eu me unisse à equipe. No decorrer do meu tempo aqui, evolui para a função de consultor Fluig, atendendo a uma variada gama de clientes, tanto a nível nacional quanto internacional. No entanto, minha busca constante pelo aprendizado me levou a explorar outras tecnologias. Enquanto já trabalhava com JavaScript no front-end, aprofundei meus conhecimentos em Node.js. Esse mergulho me permitiu aprimorar minhas habilidades e desenvolver projetos mais complexos, que não só abrangiam a interface do usuário, mas também exigiam a implementação de soluções no back-end para funcionar de maneira integral. Realizei a entrega de projetos altamente escaláveis, capazes de atender a uma grande quantidade de usuários, a uma variedade de clientes distintos.",
      dataInicio: "10/2021",
      dataFim: "09/2023",
      img: 'assets/images/mfx.jpeg',
      tecnologiasUtilizadas: [
        { techName: "Fluig" },
        { techName: "Desenvolvimento Full Stack" },
        { techName: "jQuery" },
        { techName: "TOTVS Protheus" },
        { techName: "Node.js" },
        { techName: "MySQL" },
        { techName: "Git" },
        { techName: "SQL" },
        { techName: "JavaScript" },
        { techName: "Microsoft SQL Server" },
        { techName: "React.js" },
        { techName: "Bibliotecas JavaScript" }
      ]
      
    }, {
      nome: "Totvs Brasil Central",
      descricao: "Ingressei na TOTVS Brasil Central em outubro de 2023, desempenhando o papel de desenvolvedor full stack em regime totalmente remoto. Minha principal missão é auxiliar empresas na otimização de seus processos por meio da aplicação de soluções tecnológicas inovadoras. Cada dia nesse ambiente representa um novo desafio, o que me impulsiona a buscar constante aprimoramento, garantindo assim a entrega de resultados excelentes nos projetos em que estou envolvido. Essa jornada tem sido uma oportunidade única de crescimento profissional, repleta de aprendizados que contribuem significativamente para o meu desenvolvimento como profissional de tecnologia.",
      dataInicio: "10/2023",
      dataFim: "-",
      tecnologiasUtilizadas: [
        { techName: "Angular" },
        { techName: "TypeScript" },
        { techName: "jQuery" },
        { techName: "Fluig" },
        { techName: "TOTVS Protheus" },
        { techName: "Node.js" },
        { techName: "Git" },
        { techName: "Spring Boot" },
        { techName: "JavaScript" },
        { techName: "Microsoft SQL Server" },
        { techName: "Protheus" },
        { techName: "Java" },
        { techName: "Bibliotecas JavaScript" },
        { techName: "SQL" }
      ]
      ,
      img: 'assets/images/totvs.jpeg'
    }
  ]
}
