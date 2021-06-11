import { TestBed } from '@angular/core/testing';

import { SuiviService } from './suivi.service';

describe('SuiviService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SuiviService = TestBed.get(SuiviService);
    expect(service).toBeTruthy();
  });
});
