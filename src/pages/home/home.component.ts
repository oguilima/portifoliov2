import { Component } from '@angular/core';
import { ApresentacaoComponent } from '../../components/apresentacao/apresentacao.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: true,
  imports: [ApresentacaoComponent]
})
export class HomeComponent {

}
