import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregaRecetaComponent } from './agregar-receta.component';

describe('AgregarRecetaComponent', () => {
  let component: AgregaRecetaComponent;
  let fixture: ComponentFixture<AgregaRecetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregaRecetaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregaRecetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
