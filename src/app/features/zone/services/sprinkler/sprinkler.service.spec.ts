import { TestBed } from '@angular/core/testing';

import { SprinklerService } from './sprinkler.service';

describe('SprinklerService', () => {
  let service: SprinklerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SprinklerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
