import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidatoService {
  private baseUrl = 'http://localhost:8080';  // Altere a URL base conforme necessário

  constructor(private http: HttpClient) { }

  importarCandidatos(candidatos: any[]): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/importar`, candidatos);
  }

  contarCandidatosPorEstado(): Observable<any> {
    return this.http.get(`${this.baseUrl}/contarPorEstado`);
  }

  calcularIMCMedioPorFaixaDeIdade(): Observable<any> {
    return this.http.get(`${this.baseUrl}/recuperarImcMedio`);
  }

  calcularPercentualObesosPorSexo(): Observable<any> {
    return this.http.get(`${this.baseUrl}/recuperarPercentualDeObesosPorGenero`);
  }

  calcularMediaIdadePorTipoSanguineo(): Observable<any> {
    return this.http.get(`${this.baseUrl}/recuperarMediaDeIdadePorTipoSanguineo`);
  }

  contarDoadoresPorTipoSanguineo(): Observable<any> {
    return this.http.get(`${this.baseUrl}/recuperarDoadoresPorTipoSanguineo`);
  }
}
