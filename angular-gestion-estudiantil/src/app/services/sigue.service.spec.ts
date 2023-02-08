import { TestBed } from '@angular/core/testing';

import { SigueService } from './sigue.service';

describe('SigueService', () => {
  let service: SigueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SigueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
