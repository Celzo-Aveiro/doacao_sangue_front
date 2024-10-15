import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidatoService {
  private baseUrl = 'http://localhost:8080/api/candidatos'; 

  constructor(private http: HttpClient) { }

  private getAuthHeaders(): HttpHeaders {
    const authToken = sessionStorage.getItem('authToken');
    return new HttpHeaders({
      'Authorization': `Bearer ${authToken}` // Prefixo "Bearer"
    });
  }

  importarCandidatos(candidatos: any[]): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/importar`, candidatos, { headers: this.getAuthHeaders() });
  }

  contarCandidatosPorEstado(): Observable<any> {
    return this.http.get(`${this.baseUrl}/contarPorEstado`, { headers: this.getAuthHeaders() });
  }

  calcularIMCMedioPorFaixaDeIdade(): Observable<any> {
    return this.http.get(`${this.baseUrl}/recuperarImcMedio`, { headers: this.getAuthHeaders() });
  }

  calcularPercentualObesosPorSexo(): Observable<any> {
    return this.http.get(`${this.baseUrl}/recuperarPercentualDeObesosPorGenero`, { headers: this.getAuthHeaders() });
  }

  calcularMediaIdadePorTipoSanguineo(): Observable<any> {
    return this.http.get(`${this.baseUrl}/recuperarMediaDeIdadePorTipoSanguineo`, { headers: this.getAuthHeaders() });
  }

  contarDoadoresPorTipoSanguineo(): Observable<any> {
    return this.http.get(`${this.baseUrl}/recuperarDoadoresPorTipoSanguineo`, { headers: this.getAuthHeaders() });
  }
}
