import { Component } from '@angular/core';
import { MenuComponent } from '../../components/menu/menu.component';
import { ApresentacaoComponent } from '../../components/apresentacao/apresentacao.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: true,
  imports: [MenuComponent, ApresentacaoComponent]
})
export class HomeComponent {

}
