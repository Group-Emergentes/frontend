import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneRecordComponent } from './zone-record.component';

describe('ZoneRecordComponent', () => {
  let component: ZoneRecordComponent;
  let fixture: ComponentFixture<ZoneRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZoneRecordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZoneRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
