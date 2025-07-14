import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetadetalleComponent } from './recetadetalle.component';

describe('RecetadetalleComponent', () => {
  let component: RecetadetalleComponent;
  let fixture: ComponentFixture<RecetadetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecetadetalleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecetadetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
