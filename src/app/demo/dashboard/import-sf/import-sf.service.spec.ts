import { TestBed } from '@angular/core/testing';

import { ImportSfService } from './import-sf.service';

describe('ImportSfService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImportSfService = TestBed.get(ImportSfService);
    expect(service).toBeTruthy();
  });
});
