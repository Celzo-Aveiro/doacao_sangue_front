import { Component, OnInit } from '@angular/core';
import { CandidatoService } from '../../services/candidato.service';

@Component({
  selector: 'app-contar-por-estado',
  templateUrl: './contar-por-estado.component.html',
  styleUrls: ['./contar-por-estado.component.css']
})
export class ContarPorEstadoComponent implements OnInit {
  candidatosPorEstado: any;

  constructor(private candidatoService: CandidatoService) { }

  ngOnInit(): void {
    this.candidatoService.contarCandidatosPorEstado().subscribe(data => {
      this.candidatosPorEstado = data;
    });
  }
}
