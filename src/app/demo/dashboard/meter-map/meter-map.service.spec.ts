import { TestBed } from '@angular/core/testing';

import { MeterMapService } from './meter-map.service';

describe('MeterMapService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MeterMapService = TestBed.get(MeterMapService);
    expect(service).toBeTruthy();
  });
});
