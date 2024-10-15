import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContarPorEstadoComponent } from './contar-por-estado.component';

describe('ContarPorEstadoComponent', () => {
  let component: ContarPorEstadoComponent;
  let fixture: ComponentFixture<ContarPorEstadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContarPorEstadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContarPorEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
