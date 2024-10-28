import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrrigationZoneComponent } from './irrigation-zone.component';

describe('IrrigationZoneComponent', () => {
  let component: IrrigationZoneComponent;
  let fixture: ComponentFixture<IrrigationZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IrrigationZoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IrrigationZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
