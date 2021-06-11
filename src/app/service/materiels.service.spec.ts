import { TestBed } from '@angular/core/testing';

import { MaterielsService } from './materiels.service';

describe('MaterielsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MaterielsService = TestBed.get(MaterielsService);
    expect(service).toBeTruthy();
  });
});
