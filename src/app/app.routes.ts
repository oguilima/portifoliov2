import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { ProjetosComponent } from '../pages/projetos/projetos.component';
import { CarreiraComponent } from '../pages/carreira/carreira.component';
import { FormacaoComponent } from '../pages/formacao/formacao.component'
import { FaleCmgComponent } from '../pages/fale-cmg/fale-cmg.component';

export const routes: Routes = [
    { path: "projetos", component: ProjetosComponent},
    { path: "carreira", component: CarreiraComponent},
    { path: "formacao", component: FormacaoComponent},
    { path: "contato", component: FaleCmgComponent },
    { path: "", component: HomeComponent },
    { path: '**', redirectTo: '' },
];
