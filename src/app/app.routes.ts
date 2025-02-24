import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { ProjetosComponent } from '../pages/projetos/projetos.component';
import { CarreiraComponent } from '../pages/carreira/carreira.component';

export const routes: Routes = [
    { path: "projetos", component: ProjetosComponent},
    { path: "carreira", component: CarreiraComponent},
    { path: "", component: HomeComponent },
    { path: '**', redirectTo: '' },
];
