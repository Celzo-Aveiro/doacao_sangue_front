import { Component, OnInit } from '@angular/core';
import { CandidatoService } from '../../services/candidato.service';

@Component({
  selector: 'app-media-idade',
  templateUrl: './media-idade.component.html',
  styleUrls: ['./media-idade.component.css']
})
export class MediaIdadeComponent implements OnInit {
  mediaIdade: any;

  constructor(private candidatoService: CandidatoService) { }

  ngOnInit(): void {
    this.candidatoService.calcularMediaIdadePorTipoSanguineo().subscribe(data => {
      this.mediaIdade = data;
    });
  }
}
