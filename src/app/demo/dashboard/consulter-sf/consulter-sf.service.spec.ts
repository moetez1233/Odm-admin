import { TestBed } from '@angular/core/testing';

import { ConsulterSfService } from './consulter-sf.service';

describe('ConsulterSfService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsulterSfService = TestBed.get(ConsulterSfService);
    expect(service).toBeTruthy();
  });
});
