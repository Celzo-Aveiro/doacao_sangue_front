import { Component, OnInit } from '@angular/core';
import { CandidatoService } from '../../services/candidato.service';

@Component({
  selector: 'app-imc-medio',
  templateUrl: './imc-medio.component.html',
  styleUrls: ['./imc-medio.component.css']
})
export class ImcMedioComponent implements OnInit {
  imcMedio: Map<number, number> = new Map<number, number>();

  constructor(private candidatoService: CandidatoService) { }

  ngOnInit(): void {
    this.candidatoService.calcularIMCMedioPorFaixaDeIdade().subscribe(data => {
      this.imcMedio = data;
    });
  }
}
