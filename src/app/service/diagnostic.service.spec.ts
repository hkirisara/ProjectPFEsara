import { TestBed } from '@angular/core/testing';

import { DiagnosticService } from './diagnostic.service';

describe('DiagnosticService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DiagnosticService = TestBed.get(DiagnosticService);
    expect(service).toBeTruthy();
  });
});
