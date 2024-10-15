import { Component } from '@angular/core';
import { CandidatoService } from '../../services/candidato.service';

@Component({
  selector: 'app-importar-candidatos',
  templateUrl: './importar-candidatos.component.html',
  styleUrls: ['./importar-candidatos.component.css']
})
export class ImportarCandidatosComponent {
  candidatosJson: string = '';

  constructor(private candidatoService: CandidatoService) { }

  importar() {
    const candidatos = JSON.parse(this.candidatosJson);
    this.candidatoService.importarCandidatos(candidatos).subscribe(() => {
      alert('Candidatos importados com sucesso');
    });
  }
}
