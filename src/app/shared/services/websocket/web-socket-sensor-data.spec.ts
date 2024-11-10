import { TestBed } from '@angular/core/testing';

import { WebSocketSensorData } from './web-socket-sensor-data';

describe('WebSocketRxjsServiceService', () => {
  let service: WebSocketSensorData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebSocketSensorData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
