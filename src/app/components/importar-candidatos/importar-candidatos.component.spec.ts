import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportarCandidatosComponent } from './importar-candidatos.component';

describe('ImportarCandidatosComponent', () => {
  let component: ImportarCandidatosComponent;
  let fixture: ComponentFixture<ImportarCandidatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImportarCandidatosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportarCandidatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
