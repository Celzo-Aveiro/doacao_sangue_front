import { Component, OnInit } from '@angular/core';
import { CandidatoService } from '../../services/candidato.service';

@Component({
  selector: 'app-doadores-tipo-sanguineo',
  templateUrl: './doadores-tipo-sanguineo.component.html',
  styleUrls: ['./doadores-tipo-sanguineo.component.css']
})
export class DoadoresTipoSanguineoComponent implements OnInit {
  doadoresPorTipo: any;

  constructor(private candidatoService: CandidatoService) { }

  ngOnInit(): void {
    this.candidatoService.contarDoadoresPorTipoSanguineo().subscribe(data => {
      this.doadoresPorTipo = data;
    });
  }
}
