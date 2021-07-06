import { TestBed } from '@angular/core/testing';

import { LivraisonService } from './livraison.service';

describe('LivraisonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LivraisonService = TestBed.get(LivraisonService);
    expect(service).toBeTruthy();
  });
});
