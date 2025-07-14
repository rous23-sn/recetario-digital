import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapidasComponent } from './rapidas.component';

describe('RapidasComponent', () => {
  let component: RapidasComponent;
  let fixture: ComponentFixture<RapidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RapidasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RapidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
