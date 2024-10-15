import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaIdadeComponent } from './media-idade.component';

describe('MediaIdadeComponent', () => {
  let component: MediaIdadeComponent;
  let fixture: ComponentFixture<MediaIdadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MediaIdadeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaIdadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
