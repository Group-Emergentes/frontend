import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoilMoistureComponent } from './soil-moisture.component';

describe('SoilMoistureReportGraphComponent', () => {
  let component: SoilMoistureComponent;
  let fixture: ComponentFixture<SoilMoistureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoilMoistureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoilMoistureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
