import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrrigationFrequencyComponent } from './irrigation-frequency.component';

describe('IrrigationFrequencyGraphComponent', () => {
  let component: IrrigationFrequencyComponent;
  let fixture: ComponentFixture<IrrigationFrequencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IrrigationFrequencyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IrrigationFrequencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
