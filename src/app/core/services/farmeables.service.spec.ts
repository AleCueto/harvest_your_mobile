import { TestBed } from '@angular/core/testing';

import { FarmeablesService } from './farmeables.service';

describe('FarmeablesService', () => {
  let service: FarmeablesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FarmeablesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
