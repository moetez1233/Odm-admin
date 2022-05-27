import { TestBed } from '@angular/core/testing';

import { DashAnalyticsService } from './dash-analytics.service';

describe('DashAnalyticsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DashAnalyticsService = TestBed.get(DashAnalyticsService);
    expect(service).toBeTruthy();
  });
});
