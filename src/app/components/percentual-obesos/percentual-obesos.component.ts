import { Component, OnInit } from '@angular/core';
import { CandidatoService } from '../../services/candidato.service';

@Component({
  selector: 'app-percentual-obesos',
  templateUrl: './percentual-obesos.component.html',
  styleUrls: ['./percentual-obesos.component.css']
})
export class PercentualObesosComponent implements OnInit {
  percentualObesos: any;

  constructor(private candidatoService: CandidatoService) { }

  ngOnInit(): void {
    this.candidatoService.calcularPercentualObesosPorSexo().subscribe(data => {
      this.percentualObesos = data;
    });
  }
}
