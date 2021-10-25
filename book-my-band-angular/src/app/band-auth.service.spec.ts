import { TestBed } from '@angular/core/testing';

import { BandAuthService } from './band-auth.service';

describe('BandAuthService', () => {
  let service: BandAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BandAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
