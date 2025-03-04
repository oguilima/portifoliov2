import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Projeto } from '../interfaces/projeto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjetosService {

  private readonly apiUrl = 'http://192.168.15.11:3000/projetos';

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Projeto[]> {
    return this.http.get<Projeto[]>(this.apiUrl);
  }
} 
