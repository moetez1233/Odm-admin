import { TestBed } from '@angular/core/testing';

import { SharDashDataService } from './shar-dash-data.service';

describe('SharDashDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SharDashDataService = TestBed.get(SharDashDataService);
    expect(service).toBeTruthy();
  });
});
