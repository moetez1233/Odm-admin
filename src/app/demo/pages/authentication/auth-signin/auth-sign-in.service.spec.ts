import { TestBed } from '@angular/core/testing';

import { AuthSignINService } from './auth-sign-in.service';

describe('AuthSignINService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthSignINService = TestBed.get(AuthSignINService);
    expect(service).toBeTruthy();
  });
});
