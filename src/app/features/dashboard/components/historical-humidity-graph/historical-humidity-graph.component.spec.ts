import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalHumidityGraphComponent } from './historical-humidity-graph.component';

describe('HistoricalHumidityGraphComponent', () => {
  let component: HistoricalHumidityGraphComponent;
  let fixture: ComponentFixture<HistoricalHumidityGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoricalHumidityGraphComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricalHumidityGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
