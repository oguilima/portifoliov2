import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';


@Component({
  selector: 'app-contatos',
  imports: [CardModule],
  templateUrl: './contatos.component.html',
  styleUrl: './contatos.component.css'
})
export class ContatosComponent {
  redirect(url: string) {
    window.open(url, '_blank');
  }
  
}
