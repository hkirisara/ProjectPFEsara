import { TestBed } from '@angular/core/testing';

import { TypematerielService } from './typemateriel.service';

describe('TypematerielService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TypematerielService = TestBed.get(TypematerielService);
    expect(service).toBeTruthy();
  });
});
