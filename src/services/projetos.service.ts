import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Projeto } from '../interfaces/projeto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjetosService {

  private readonly apiUrl = 'https://portifolio-backend-if7f.onrender.com/projetos';

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Projeto[]> {
    return this.http.get<Projeto[]>(this.apiUrl);
  }
} 
